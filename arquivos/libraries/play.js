const ytSearch = require('yt-search')
const { createDecipheriv } = require("crypto");


const audioQualities = [92, 128, 256, 320];
const videoQualities = [144, 360, 480, 720, 1080];

function getYouTubeVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|v\/|embed\/|user\/[^\/\n\s]+\/)?(?:watch\?v=|v%3D|embed%2F|video%2F)?|youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/|youtube\.com\/playlist\?list=)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const hexcode = (hex) => Buffer.from(hex, "hex");

const decode = (enc) => {
  try {
    const secret_key = "C5D58EF67A7584E4A29F6C35BBC4EB12";
    const data = Buffer.from(enc, "base64");
    const iv = data.slice(0, 16);
    const content = data.slice(16);
    const key = hexcode(secret_key);

    const decipher = createDecipheriv("aes-128-cbc", key, iv);
    const decrypted = Buffer.concat([decipher.update(content), decipher.final()]);

    return JSON.parse(decrypted.toString());
  } catch (error) {
    throw new Error(error.message);
  }
};

async function savetube(link, quality, type) {
  try {
    const cdnRes = await fetch("https://media.savetube.me/api/random-cdn");
    const { cdn } = await cdnRes.json();

    const infoRes = await fetch(`https://${cdn}/v2/info`, {
      method: "POST",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K)",
        "Referer": "https://yt.savetube.me/1kejjj1?id=362796039",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: link })
    });

    const infoJson = await infoRes.json();
    const info = decode(infoJson.data);

    const downloadRes = await fetch(`https://${cdn}/download`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K)",
        "Referer": "https://yt.savetube.me/start-download?from=1kejjj1%3Fid%3D362796039"
      },
      body: JSON.stringify({
        downloadType: type,
        quality: `${quality}`,
        key: info.key
      })
    });

    const downloadJson = await downloadRes.json();

    return {
      status: true,
      quality: `${quality}${type === "audio" ? "kbps" : "p"}`,
      availableQuality: type === "audio" ? audioQualities : videoQualities,
      url: downloadJson.data.downloadUrl,
      filename: `${info.title} (${quality}${type === "audio" ? "kbps).mp3" : "p).mp4"}`
    };
  } catch (error) {
    console.error("Erro no SaveTube:", error);
    return { status: false, message: "Erro ao baixar" };
  }
}

async function playmp3(link, quality = 128) {
  const videoId = getYouTubeVideoId(link);
  const q = audioQualities.includes(+quality) ? +quality : 128;

  if (!videoId) return { status: false, message: "Link do YouTube inválido." };

  const url = `https://youtube.com/watch?v=${videoId}`;
  const meta = await ytSearch(url);
  const download = await savetube(url, q, "audio");

  return { status: true, metadata: meta.all[0], download };
}

async function playmp4(link, quality = 360) {
  const videoId = getYouTubeVideoId(link);
  const q = videoQualities.includes(+quality) ? +quality : 360;

  if (!videoId) return { status: false, message: "Link do YouTube inválido." };

  const url = `https://youtube.com/watch?v=${videoId}`;
  const meta = await ytSearch(url);
  const download = await savetube(url, q, "video");

  return { status: true, metadata: meta.all[0], download };
}
module.exports = { ytSearch, playmp3, playmp4 };
