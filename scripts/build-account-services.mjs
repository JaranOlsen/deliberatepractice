import {mkdir,readFile,writeFile,rm} from 'node:fs/promises';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {gzipSync} from 'node:zlib';
import {SKILL_ORDER} from '../src/data/index.js';
const root=new URL('../',import.meta.url),target=new URL('supabase/functions/account-services/generated/',root);
await rm(target,{recursive:true,force:true});
const files=['server/billingService.js','server/accountServicesStore.js','server/accountServicesHttp.js','server/practiceContentService.js','src/data/subscriptionPlans.js','src/data/billingBusiness.js'];
for(const name of files){const out=new URL(name,target);await mkdir(dirname(fileURLToPath(out)),{recursive:true});await writeFile(out,await readFile(new URL(name,root)));}
const manifest=JSON.parse(await readFile(new URL('src/data/runtime/manifest.json',root))),banks={},mastery={};
for(const language of ['en','no']){
 for(const skill of SKILL_ORDER)banks[`${language}:${skill}`]=JSON.parse(await readFile(new URL(`src/data/runtime/statements/${language}-${skill}.json`,root)));
 for(const exercise of manifest.EXERCISE_CATALOG)mastery[`${language}:${exercise.id}`]=JSON.parse(await readFile(new URL(`src/data/runtime/mastery/${language}-${exercise.id}.json`,root)));
}
const data=gzipSync(JSON.stringify({manifest,banks,mastery})).toString('base64');
await writeFile(new URL('catalog.js',target),`const bytes=Uint8Array.from(atob(${JSON.stringify(data)}),c=>c.charCodeAt(0));
export const catalog=await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).json();\n`);
console.log(`Prepared account services: ${files.length+1} generated files; static curriculum and no secrets.`);
