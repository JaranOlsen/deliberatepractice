import {mkdir,readFile,writeFile,rm} from 'node:fs/promises';
import {gzipSync} from 'node:zlib';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {AI_SKILLS} from '../src/js/aiPracticeProtocol.js';

const root=new URL('../',import.meta.url),target=new URL('supabase/functions/ai-practice/generated/',root);
await rm(target,{recursive:true,force:true});
const modules=['server/aiPracticeService.js','server/aiPracticeHttp.js','server/aiPracticeHosted.js','server/aiPracticeCatalog.js',
  'src/data/aiPracticeRubric.js','src/data/aiPracticeVoices.js','src/data/skillFeedback.js','src/js/aiPracticeProtocol.js','src/js/aiPracticeDelivery.js'];
const banks=[];
for(const language of ['en','no'])for(const skill of AI_SKILLS)banks.push({name:`${language}-${skill}`,key:`${language}:${skill}`});
for(const name of modules) {
  const path=new URL(name,target);await mkdir(dirname(fileURLToPath(path)),{recursive:true});
  await writeFile(path,await readFile(new URL(name,root)));
}
const data={manifest:JSON.parse(await readFile(new URL('src/data/runtime/manifest.json',root))),banks:{}};
for(const bank of banks) data.banks[bank.key]=JSON.parse(await readFile(new URL(`src/data/runtime/statements/${bank.name}.json`,root)));
// Compress static curriculum to keep deployment small; no runtime filesystem or
// network reads are needed, and the original revisions remain unchanged.
const encoded=gzipSync(JSON.stringify(data)).toString('base64');
await writeFile(new URL('catalog.js',target),`import {createPilotCatalog} from './server/aiPracticeCatalog.js';
const bytes=Uint8Array.from(atob(${JSON.stringify(encoded)}),c=>c.charCodeAt(0));
const data=await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).json();
export const loadContext=createPilotCatalog(data.manifest,data.banks);
`);
console.log(`Prepared AI Edge bundle: ${modules.length+1} generated files; all authored English/Norwegian material.`);
