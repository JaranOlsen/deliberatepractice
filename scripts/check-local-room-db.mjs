// Isolated Postgres tests: npm run test:rooms:db
// Optional localhost-only RPC bridge for check-four-set-room-flows.js: add --serve.
// No remote credentials or Supabase connection are used.
import { PGlite } from '@electric-sql/pglite';
import { pgcrypto } from '@electric-sql/pglite/contrib/pgcrypto';
import { readFile, readdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
import assert from 'node:assert/strict';
import {NORA_MASTERY} from '../src/data/noraMastery.js';
import {NORA_SKILLS,NORA_LEVELS} from '../src/data/noraCase.js';
import {MIA_MASTERY} from '../src/data/miaMastery.js';
import {MIA_SKILLS,MIA_LEVELS} from '../src/data/miaCase.js';
import {ARNE_MASTERY} from '../src/data/arneMastery.js';
import {ARNE_SKILLS,ARNE_LEVELS} from '../src/data/arneCase.js';
import {BASE_PRACTICE} from '../src/data/index.js';
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
    const levelMigration=/_(?:arne|mia|nora)_practice_levels\.sql$/.test(name);
    const validator=levelMigration?(await db.query("select 'dp_private.validate_room_config(jsonb)'::regprocedure::oid as oid")).rows[0].oid:null;
    await db.exec(await read('supabase/migrations/' + name));
    if(levelMigration)assert.equal((await db.query("select 'dp_private.validate_room_config(jsonb)'::regprocedure::oid as oid")).rows[0].oid,validator,'Existing room validator identity must survive the migration');
  }
  for(const exercise of [...ARNE_MASTERY,...MIA_MASTERY,...NORA_MASTERY]) {
    const row=(await db.query('select scenes from dp_private.exercise_catalog where exercise_id=$1 and revision=$2',[exercise.id,exercise.revision])).rows[0];
    assert.deepEqual(row?.scenes,exercise.scenes.map(({id,skillId,criteriaTags})=>({id,skillId,criteriaTags})),'Mastery catalog drift: '+exercise.id);
  }
  for(const [caseId,skills,levels] of [['case-arne',ARNE_SKILLS,ARNE_LEVELS],['case-mia',MIA_SKILLS,MIA_LEVELS],['case-nora',NORA_SKILLS,NORA_LEVELS]])for(const skill of skills)for(const level of levels) {
    const row=(await db.query('select entries from dp_private.focused_level_catalog where skill_id=$1 and difficulty=$2 and case_id=$3 and revision=$4',[skill,level,caseId,BASE_PRACTICE[skill].cases[caseId].statements[0].revision])).rows[0];
    const expected=BASE_PRACTICE[skill].cases[caseId].statements.filter(e=>e.difficultyTier===level).map(({id,criteriaTags})=>({id,criteriaTags}));
    assert.deepEqual(row?.entries,expected,'Focused catalog drift: '+skill+'/'+level);
  }
  for (const name of ['check-four-set-rooms.sql', 'check-room-item-workflow.sql', 'check-practice-rooms.sql', 'check-room-lifecycle.sql', 'check-room-readiness.sql', 'check-practice-goals.sql', 'check-rating-history.sql', 'check-mastery.sql','check-practice-levels.sql']) {
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
      mastery_capabilities: [],
      record_mastery_rating: ['input_language_id','input_exercise_id','input_content_revision','input_parent_round_id','input_set_number','input_completed_scene_ids','input_score','input_practice_mode'],
      create_practice_room: ['input_config','input_room_id'], join_practice_room: ['input_code','input_role'],
      prepare_practice_room: ['input_room_id','input_command_id','input_expected_version','input_config'],
      sync_practice_room: ['input_room_id','input_acknowledged_version'],
      command_practice_room: ['input_room_id','input_command_id','input_expected_version','input_action','input_score'],
      record_practice_rating_with_history: ['input_therapist_user_id','input_source','input_language_id','input_skill_id','input_case_id','input_statement_id','input_statement_index','input_difficulty','input_score','input_criteria_tags','input_content_revision','input_rating_scope','input_completed_statement_ids','input_item_count','input_client_round_id','input_practice_mode','input_rating_rubric','input_parent_round_id','input_set_number'],
      manage_practice_room: ['input_room_id','input_command_id','input_expected_version','input_action','input_config']
    };
    signatures.record_practice_rating = signatures.record_practice_rating_with_history.slice(0,-2);
    let queue = Promise.resolve();
    const server = createServer((req, res) => {
      const reply = (status, value) => {res.writeHead(status, {'Content-Type': 'application/json'});res.end(JSON.stringify(value));};
      if (req.url === '/users') return reply(200, users);
      if (req.url === '/mastery-ratings') {
        queue = queue.then(async () => reply(200, (await db.query('select * from public.mastery_ratings order by created_at,id')).rows));return;
      }
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
            const call = `public.${name}(${values.map((_, i) => '$' + (i+1)).join(',')})`;
            const result = await db.query(name.startsWith('record_practice_rating') ? `select to_jsonb(saved) as room from ${call} saved` : `select ${call} as room`, values);
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
