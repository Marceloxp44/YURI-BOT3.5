const {"default": makeWASocket,downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap } = require('@cognima/walib');
const LoggerB = require('@cognima/walib/lib/Utils/logger').default;

/* --------- [ Módulos Necessários ] ---------- */
const { Boom }  = require('@hapi/boom');
const AssemblyAI = require("assemblyai");
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const { randomBytes } = require("crypto");
const { emoji } = require("scr-emoji");
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const FileType = require('file-type');
const os = require('os');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const tesseract = require('tesseract.js');
const moment = require('moment-timezone');
const colors = require("colors");
const readline = require('readline');
const { File } = require("megajs");

/* Data & Hora */
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

// Simplicidade: Quando o arquivo não estiver na pasta, automaticamente, inicia o bot sem ocorrer erro na inicialização. Cria o arquivo JSON do Contador de Mensagens.
try {
    var countMessage = JSON.parse(fs.readFileSync('./settings/media/countmsg.json'));
} catch {
    fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify([]));
}

/* -------------- [ Arquivos JSON ] -------------- */
const sotoy = JSON.parse(fs.readFileSync('./arquivos/database/func/json/sotoy.json'));
const comandos = JSON.parse(fs.readFileSync('./settings/media/comandos.json'));
const daily = JSON.parse(fs.readFileSync('./arquivos/database/func/users/diario.json'));
const definitions = JSON.parse(fs.readFileSync('./settings/definitions.json'));
const images = JSON.parse(fs.readFileSync('./settings/images.json'));
const premium = JSON.parse(fs.readFileSync('./arquivos/database/func/users/premium.json'));
const ban = JSON.parse(fs.readFileSync('./arquivos/database/func/users/banned.json'));
const muted = JSON.parse(fs.readFileSync('./arquivos/database/groups/muted.json'))
const ads = JSON.parse(fs.readFileSync('./arquivos/database/groups/anuncios.json'));
const limitefll = JSON.parse(fs.readFileSync('./arquivos/database/func/users/flood.json'));
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./arquivos/database/groups/games/tictactoe/ttt-player1.json'));
const aluguel = JSON.parse(fs.readFileSync("./arquivos/database/groups/aluguel/aluguel.json"))
const grupos = JSON.parse(fs.readFileSync("./arquivos/database/groups/aluguel/grupos.json"))
const chaves = JSON.parse(fs.readFileSync("./arquivos/database/groups/aluguel/chaves.json"))
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./arquivos/database/groups/games/tictactoe/ttt-player2.json'));
const antispam = JSON.parse(fs.readFileSync('./settings/media/antispam.json'));
const anotar = JSON.parse(fs.readFileSync("./arquivos/database/func/anotar.json"));
const config = JSON.parse(fs.readFileSync('./settings/config.json'));
const creds = JSON.parse(fs.readFileSync('./settings/creds.json'));
const Limit_CMD = JSON.parse(fs.readFileSync("./arquivos/database/func/limitarcmd.json"))
const level2 = JSON.parse(fs.readFileSync("./arquivos/database/func/users/leveling.json"));
const tools = JSON.parse(fs.readFileSync('./arquivos/database/func/json/tools.json'));
const advices = JSON.parse(fs.readFileSync('./arquivos/database/func/json/advices.json'));
const packname = JSON.parse(fs.readFileSync('./package.json'));
const namoro1 = JSON.parse(fs.readFileSync("./arquivos/database/func/namoro1.json"));
const namoro2 = JSON.parse(fs.readFileSync("./arquivos/database/func/namoro2.json"));
const rglastfm = JSON.parse(fs.readFileSync('./arquivos/database/func/lastfm.json'));

/* ------ [ Apagar arquivos do Diretório ] ------ */
function DLT_FL(localDoArquivo) {try {fs.unlinkSync(localDoArquivo)} catch(error) {}};

const { sayLog, inputLog, infoLog, successLog, errorLog, warningLog, eventLog } = require('./arquivos/org/logger.js');
const { extractMetadata } = require('./arquivos/libraries/extractMetadata.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./arquivos/org/banned.js");
const { Sticker } = require('./arquivos/libraries/plugins/sticker');
const DL = require('./arquivos/libraries/plugins/dl').default;
const Shazam = require("./arquivos/libraries/plugins/acrcloud.js");
const KarloAI = require("./arquivos/libraries/plugins/karloai.js");
const { validmove, setGame } = require('./arquivos/tictactoe');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, initSystemAdd } =  require('./arquivos/org/addcmd.js');
const { whatMusicAr, palavrasANA, quizanimais, enigmaArchive, garticArchives } = require('./arquivos/org/jogos.js');
const { countDays, timeDate, obeso, capitalizeFirstLetter, simih, TimeCount, getBuffer, fetchJson, fetchText, fetchBuffer, formatNumberDecimal, generateMessageID, convertBytes, getGroupAdmins, getMembros, isFiltered, addFilter, chyt, getExtension, getRandom, convertSticker, upload, nit, supre, formatDateOriginal } = require('./arquivos/libraries/functions.js');
const VyroEngine = require("./arquivos/libraries/plugins/vyro.js");
const WebP_GIF = require("./arquivos/libraries/webpmp4.js");
const { writeExifImg, writeExif } = require('./arquivos/org/exif.js')
const { linguagem, mess, getInfo } = require('./settings/lib');
const { psycatgames } = require('./arquivos/libraries/plugins/psycat.js');
const { vyroEngine } = require('./arquivos/libraries/plugins/vyro.js');
const { destrava, destrava2 } = require('./arquivos/libraries/destrava.js');
const TudoCelular = require('./arquivos/libraries/plugins/tudocelular.js');
const { tabela } = require('./arquivos/org/tabela.js');
const uploader = require('./arquivos/libraries/upload.js');
const { ytSearch, playmp3, playmp4 } = require('./arquivos/libraries/play.js');
const LastFM = require("./arquivos/libraries/plugins/lastfm.js");
const RemoverFundo = require("./arquivos/libraries/removebg.js");
const ownerName = config["nameOwner"].value;
const prefix = config["Prefix"].value;
const channel = config["NewsletterConfig"].value;
const NomeDoBot = config["botName"].value;

/* ---- [ Letras Modificadas ou Emojis ] ---- */
function ANT_LTR_MD_EMJ(str) {
    for (let i = 0, n = str.length; i < n; i++) {
        if(str.charCodeAt(i) > 255) {
            return true;
        }
    }
       return false;
}

/* ----------- [ Embaralhar Palavras ] ----------- */
const shuffle = (palavraOriginal) => {
palavra = `${palavraOriginal} `; armax = []
for(i = 0; i < palavra.length; i++) {armax.push({l: palavra.split(palavra.slice(i+1))[0].slice(i)})}
shuffleProcess = ""; total_armax = armax.length
for(a = 0; a < total_armax; a++) {
toDoRandom = Math.floor(Math.random()*armax.length)
shuffleProcess += armax[toDoRandom].l
armax.splice(toDoRandom, 1) /* Apagar o registro da palavra digitada anteriormente */
}
return shuffleProcess
}

/* -------------- [ Função da Baileys ] ----------------- */
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

const enviarfiguUrl = async(yurizin, from, link, mr) => {
ranp = await getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
yurizin.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const sendPoll = (yurizin, id, name = '', values = [], selectableCount = 1) => { 
return yurizin.sendMessage(id, {poll: {name, values, selectableCount}, messageContextInfo: {messageSecret: randomBytes(32)}}, {id, options: {userJid: yurizin?.user?.id}}).catch(() => {
return console.log(console.error);
});
}

/* Tudo abaixo 1000 vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo. */
const sleep = async => {
    return new Promise(resolve => setTimeout(resolve, ms));
};


/* -------- [ Similaridade de Comandos ] ------- */
function fuzzySimilarity(word1, word2) {
   function generateNGrams(word, n) {
      const nGrams = [];
      for (let i = 0; i < word.length - n + 1; i++) {
        nGrams.push(word.slice(i, i + n));
      }
        return nGrams;
    };
  const nGrams1 = generateNGrams(word1, 2);
  const nGrams2 = generateNGrams(word2, 2);
  const commonNGrams = nGrams1.filter(nGram => nGrams2.includes(nGram));
  const similarity = Math.round((2 * commonNGrams.length) / (nGrams1.length + nGrams2.length) * 100);
      return similarity;
}
  
function listCommands(targetWord) {
    const fileContent = fs.readFileSync("index.js", "utf8");
    const commandsRegex = /case\s+['"](.+?)['"]/g;
    let mostSimilarCommand = "";
    let highestSimilarity = -1;
    let match;
        while ((match = commandsRegex.exec(fileContent)) !== null) {
          const extractedCommand = match[1];
          const similarity = fuzzySimilarity(targetWord, extractedCommand);
          if (similarity > highestSimilarity) {
              highestSimilarity = similarity;
              mostSimilarCommand = extractedCommand;
          }
      }
      return {command: mostSimilarCommand, similarity: highestSimilarity};
};

/* ------------- [ Extração de DDD ] ------------- */
function extractStateFromDDD(ddd) {
    const dddList = {"11": "São Paulo", "12": "São Paulo", "13": "São Paulo", "14": "São Paulo", "15": "São Paulo", "16": "São Paulo", "17": "São Paulo", "18": "São Paulo", "19": "São Paulo", "21": "Rio de Janeiro", "22": "Rio de Janeiro", "24": "Rio de Janeiro", "27": "Espírito Santo", "28": "Espírito Santo", "31": "Minas Gerais", "32": "Minas Gerais", "33": "Minas Gerais", "34": "Minas Gerais", "35": "Minas Gerais", "37": "Minas Gerais", "38": "Minas Gerais", "41": "Paraná", "42": "Paraná", "43": "Paraná", "44": "Paraná", "45": "Paraná", "46": "Paraná", "47": "Santa Catarina", "48": "Santa Catarina", "49": "Santa Catarina", "51": "Rio Grande do Sul", "53": "Rio Grande do Sul", "54": "Rio Grande do Sul", "55": "Rio Grande do Sul", "61": "Distrito Federal", "62": "Goiás", "63": "Tocantins", "64": "Goiás", "65": "Mato Grosso", "66": "Mato Grosso", "67": "Mato Grosso do Sul", "68": "Acre", "69": "Rondônia", "71": "Bahia", "73": "Bahia", "74": "Bahia", "75": "Bahia", "77": "Bahia", "79": "Sergipe", "81": "Pernambuco", "82": "Alagoas", "83": "Paraíba", "84": "Rio Grande do Norte", "85": "Ceará", "86": "Piauí", "87": "Pernambuco", "88": "Ceará", "89": "Piauí", "91": "Pará", "93": "Pará", "94": "Pará", "95": "Roraima", "96": "Amapá", "97": "Amazonas", "98": "Maranhão", "99": "Maranhão"};
    return dddList[ddd] || "";
}

function extractStateFromNumber(phoneNumber) {
    const numericOnly = phoneNumber.replace(/\D/g, '');
    if (numericOnly.startsWith(55) && numericOnly.length === 12 || numericOnly.length === 13) {
        const ddd = numericOnly.substring(2, 4);
        return extractStateFromDDD(ddd) || "Números de fora do Brasil, os estados não é possível identificar.";
    } else {
        return "Números de fora do Brasil, os estados não é possível identificar.";
    }
}

function extractDDD(phoneNumber) {
    const numericOnly = phoneNumber.replace(/\D/g, '');
    if (numericOnly.startsWith(55) && numericOnly.length === 12 || numericOnly.length === 13) {
        return numericOnly.substring(2, 4);
    } else {
        return null
    }
}

/* --------- [ Localizar sigla do Município/Cidade que à pertence, por exemplo: PE, pertence a cidade de Pernambuco ] ------ */
function extractAcronymFromCity(sigla) {
    acronymsCities = {"AC": "Acre", "AL": "Alagoas", "AP": "Amapá", "AM": "Amazonas", "BA": "Bahia", "CE": "Ceará", "DF": "Distrito Federal", "ES": "Espírito Santo", "GO": "Goiás", "MA": "Maranhão", "MT": "Mato Grosso", "MS": "Mato Grosso do Sul", "MG": "Minas Gerais", "PA": "Pará", "PB": "Paraíba", "PR": "Paraná", "PE": "Pernambuco", "PI": "Piauí", "RJ": "Rio de Janeiro", "RN": "Rio Grande do Norte", "RS": "Rio Grande do Sul", "RO": "Rondônia", "RR": "Roraima", "SC": "Santa Catarina", "SP": "São Paulo", "SE": "Sergipe", "TO": "Tocantins"};
    return acronymsCities[sigla] || "";
};

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

/* --- [ Exportação de todas as funções dentro do arquivo, para ser definido em outros ] --- */
module.exports = { 
/* Módulos */
    tesseract, LoggerB, Boom, AssemblyAI, axios, fs, cheerio, crypto, util, randomBytes, emoji, P, NodeCache, linkfy, request, ms, FileType, os, ffmpeg, fetch, exec, spawn, moment, colors, readline, execSync, File,
/* Funções necessárias */
    TudoCelular, fetchBuffer, VyroEngine, DL, WebP_GIF, RemoverFundo, Shazam, addComandosId, deleteComandos, getComandoBlock, getComandos, uploader, addComandos, tabela, destrava, destrava2, mess, LastFM, psycatgames, vyroEngine, linguagem, getInfo, writeExifImg, writeExif, countDays, timeDate, obeso, capitalizeFirstLetter, simih, TimeCount, getBuffer, fetchJson, fetchText, formatNumberDecimal, generateMessageID, convertBytes, getGroupAdmins, getMembros, isFiltered, addFilter, chyt, getExtension, getRandom, convertSticker, upload, nit, supre,extractMetadata, addBanned, unBanned, BannedExpired, cekBannedUser, formatDateOriginal, validmove, setGame, whatMusicAr, palavrasANA, quizanimais, enigmaArchive, garticArchives, Sticker, KarloAI,
/* JSONs nescessários */
    rglastfm, creds, countMessage, sotoy, images, definitions, daily, muted, premium, ban, aluguel, limitefll, joguinhodavelhajs, ads, joguinhodavelhajs2, grupos, chaves, anotar, antispam, config, Limit_CMD, advices, tools, level2, packname, namoro1, namoro2, ads, initSystemAdd,
/* Outras funções */
    sayLog, inputLog, infoLog, successLog, errorLog, warningLog, extractAcronymFromCity, DLT_FL, getFileBuffer, shuffle, sleep, sendPoll, enviarfiguUrl, listCommands, fuzzySimilarity, extractDDD, eventLog,extractStateFromNumber, extractStateFromDDD, VerificarJSON, ANT_LTR_MD_EMJ, NomeDoBot, ownerName, prefix, channel, date, hora, time
}