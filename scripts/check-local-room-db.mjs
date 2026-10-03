// Isolated Postgres tests: npm run test:rooms:db
// Optional localhost-only RPC bridge for check-four-set-room-flows.js: add --serve.
// No remote credentials or Supabase connection are used.
import { PGlite } from '@electric-sql/pglite';
import { pgcrypto } from '@electric-sql/pglite/contrib/pgcrypto';
import { readFile, readdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
const root = new URL('../', import.meta.url);
const read = name => readFile(new URL(name, root), 'utf8');
const db = new PGlite({extensions: {pgcrypto}});
try {
  // Only Supabase's Auth interface is stubbed; schema, room RPCs and constraints are real.
  await db.exec(`create role anon; create role authenticated; create schema auth; create schema extensions;
    create table auth.users(id uuid primary key,aud text,role text,email text,raw_user_meta_data jsonb default '{}');
    create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
    create function auth.jwt() returns jsonb language sql stable as $$ select '{}'::jsonb $$;
    grant usage on schema public,auth to authenticated,anon;
    create publication supabase_realtime;`);
  await db.exec(await read('supabase/auth-pairing-practice.sql'));
  for (const name of (await readdir(new URL('supabase/migrations/', root))).sort()) {
    await db.exec(await read('supabase/migrations/' + name));
  }
  for (const name of ['check-four-set-rooms.sql', 'check-room-item-workflow.sql', 'check-practice-rooms.sql', 'check-room-lifecycle.sql', 'check-room-readiness.sql', 'check-practice-goals.sql']) {
    await db.exec(await read('scripts/' + name));
    console.log('PASS ' + name);
  }
  if (!process.argv.includes('--serve')) {
    await db.close();
  } else {
    const users = Object.fromEntries(['o','t','c','p'].map(role => [role, randomUUID()]));
    for (const [role, id] of Object.entries(users)) {
      await db.query("insert into auth.users(id,email) values($1,$2)", [id, role + '@local.invalid']);
      await db.query('update public.profiles set display_name=$2 where id=$1', [id, 'Test ' + role]);
    }
    const signatures = {
      create_practice_room: ['input_config','input_room_id'], join_practice_room: ['input_code','input_role'],
      prepare_practice_room: ['input_room_id','input_command_id','input_expected_version','input_config'],
      sync_practice_room: ['input_room_id','input_acknowledged_version'],
      command_practice_room: ['input_room_id','input_command_id','input_expected_version','input_action','input_score'],
      manage_practice_room: ['input_room_id','input_command_id','input_expected_version','input_action','input_config']
    };
    let queue = Promise.resolve();
    const server = createServer((req, res) => {
      const reply = (status, value) => {res.writeHead(status, {'Content-Type': 'application/json'});res.end(JSON.stringify(value));};
      if (req.url === '/users') return reply(200, users);
      if (req.url === '/ratings') {
        queue = queue.then(async () => reply(200, (await db.query('select * from public.practice_ratings order by created_at,id')).rows));
        return;
      }
      if (req.url === '/goal' && req.method === 'POST') {
        let body=''; req.on('data',chunk=>{body+=chunk;}); req.on('end',()=>{
          queue=queue.then(async()=>{
            try {
              const {user,targetUserId=user,languageId,skillId,action,text}=JSON.parse(body);
              if(!Object.values(users).includes(user)||!['read','save'].includes(action)) throw new Error('Not a goal fixture request');
              await db.exec('begin');
              await db.query("select set_config('request.jwt.claim.sub',$1,true)",[user]);
              await db.exec('set local role authenticated');
              let value='';
              if(action==='read')value=(await db.query('select goal_text from public.practice_goals where user_id=$1 and language_id=$2 and skill_id=$3',[targetUserId,languageId,skillId])).rows[0]?.goal_text??'';
              else if(text){
                await db.query('insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values($1,$2,$3,$4) on conflict(user_id,language_id,skill_id) do update set goal_text=excluded.goal_text',[targetUserId,languageId,skillId,text]);value=text;
              } else await db.query('delete from public.practice_goals where user_id=$1 and language_id=$2 and skill_id=$3',[targetUserId,languageId,skillId]);
              await db.exec('commit');reply(200,{text:value});
            }catch(error){await db.exec('rollback');reply(400,{message:error.message});}
          });
        });return;
      }
      // Only the isolated fixture database: simulate a host absence without a five-minute browser wait.
      if (req.url === '/host-away' && req.method === 'POST') {
        let body='';req.on('data',chunk=>{body+=chunk;});req.on('end',()=>{
          queue=queue.then(async()=>{
            try {
              const {roomId}=JSON.parse(body);
              const found=await db.query('select host_id from public.practice_rooms where id=$1',[roomId]);
              if(!Object.values(users).includes(found.rows[0]?.host_id))throw new Error('Not a browser fixture room');
              await db.query("update public.practice_rooms set created_at=now()-interval '10 minutes' where id=$1",[roomId]);
              await db.query("update dp_private.room_presence set seen_at=now()-interval '6 minutes' where room_id=$1 and user_id=$2",[roomId,found.rows[0].host_id]);
              reply(200,{ok:true});
            } catch(error){reply(400,{message:error.message});}
          });
        });return;
      }
      if (req.url !== '/rpc' || req.method !== 'POST') return reply(404, {});
      let body = '';
      req.on('data', chunk => {body += chunk;});
      req.on('end', () => {
        queue = queue.then(async () => {
          try {
            const {user, name, args} = JSON.parse(body);
            if (!Object.values(users).includes(user) || !Object.hasOwn(signatures, name)) throw new Error('Unknown test user or RPC');
            await db.exec('begin');
            await db.query("select set_config('request.jwt.claim.sub',$1,true)", [user]);
            await db.exec('set local role authenticated');
            const values = signatures[name].map(key => args[key] ?? null);
            const result = await db.query(`select public.${name}(${values.map((_, i) => '$' + (i+1)).join(',')}) as room`, values);
            await db.exec('commit');
            reply(200, result.rows[0].room);
          } catch (error) {
            await db.exec('rollback'); reply(400, {message: error.message, code: error.code ?? 'P0001'});
          }
        });
      });
    });
    server.listen(5199, '127.0.0.1', () => console.log('Local test RPC bridge ready at http://127.0.0.1:5199'));
    const close = () => server.close(async () => {await db.close();process.exit();});
    process.on('SIGINT', close);process.on('SIGTERM', close);
  }
} catch (error) {
  console.error(error.message, error.where ?? '');
  await db.close();process.exitCode = 1;
}
