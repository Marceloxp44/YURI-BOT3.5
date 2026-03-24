const yts = require("yt-search");

async function ytSearch(query, limit = 1) {
  try {
    const searchResults = await yts(query);
    const videos = searchResults.videos.slice(0, limit).map(video => ({
      titulo: video.title,
      url: video.url,
      duracao: video.timestamp,
      views: video.views,
      autor: video.author.name,
      thumbnail: video.thumbnail
    }));
    return videos;
  } catch (error) {
    console.error("Erro na busca do YouTube:", error);
    return [];
  }
}

// exportar a função direto
module.exports = ytSearch;