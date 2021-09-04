const mongoose = require('mongoose');

const animeModel = new mongoose.Schema({
  nome: {type: String, required: true },
  img: {type: String, required: true},
  desc: {type: String},
  dataCriacao: {type: Date, default: Date.now}
})

Anime = mongoose.model('animes',animeModel)

module.exports = Anime;