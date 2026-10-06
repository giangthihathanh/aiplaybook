import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const required=[
 'src/App.jsx','src/style.css','public/data/prompts.json','public/docs/AI_Playbook_for_Test_Managers_Complete.docx',
 'public/docs/AI_Test_Manager_Combined_Catalog.md','public/dashboard/DASHBOARD_SPECIFICATION.md',
 'public/dashboard/KPI_DEFINITIONS.md','public/governance/SCALE_CHECKLIST.md','public/governance/RACI.md',
 'SECURITY.md','ROADMAP.md','.github/workflows/deploy.yml'
];
const missing=required.filter(f=>!fs.existsSync(path.join(root,f)));
if(missing.length){console.error('Missing required assets:\n'+missing.join('\n'));process.exit(1)}
const prompts=JSON.parse(fs.readFileSync(path.join(root,'public/data/prompts.json'),'utf8'));
if(!Array.isArray(prompts)||prompts.length!==13){console.error(`Expected 13 prompt records; found ${prompts.length}`);process.exit(1)}
const ids=prompts.map(x=>x.id);if(new Set(ids).size!==ids.length){console.error('Duplicate Prompt IDs detected');process.exit(1)}
for(const p of prompts){for(const k of ['id','name','owner','version','status','classification','nextReview'])if(!p[k]){console.error(`Missing ${k} in ${p.id||'record'}`);process.exit(1)}}
const app=fs.readFileSync(path.join(root,'src/App.jsx'),'utf8');
for(const ref of ['./data/prompts.json','./docs/AI_Playbook_for_Test_Managers_Complete.docx','./governance/SCALE_CHECKLIST.md'])if(!app.includes(ref)){console.error(`App is missing expected reference: ${ref}`);process.exit(1)}
console.log(`Repository check passed: ${required.length} required assets, ${prompts.length} prompts, unique IDs.`);
