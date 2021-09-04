const express = require('express');
const router = express.Router();
const Anime = require('../models/animes');

router.get("/", (req, res) => {
  res.status(200).send("Home da paginas");
})

router.get("/animes", async (req, res) => {
  await Anime.find({}).then((anime) => {
    res.status(200).send(anime);
  }).catch((err) => console.error(err))
})

router.get("/animes/:id", async (req, res) => {
  await Anime.find({_id: req.params.id}).then((anime) => {
    res.status(200).send(anime);
  }).catch((err) => {
    res.status(404).send(err);
  })
})

router.post("/add", async (req, res) => {
  await Anime.create(req.body).then(() => {
    res.status(200).send(`O Anime ${req.body.nome} foi adicionado com sucesso!`)
  }).catch((err) => {
    res.status(404).send("Não foi possivel adicionar, verifique se todas as informações foram preenchidas.");
  })
})

router.put("/update/:id", async (req, res) => {
  await Anime.updateOne({_id: req.params.id}, req.body).then(() => {
    res.status(200).send("Anime atualizado com sucesso!");
  }).catch((err) => {
    res.status(404).send("Não foi possivel atualizar, anime não encontrado.")
  })
})

router.delete('/delete/:id', async (req, res) => {
  await Anime.deleteOne({_id: req.params.id}).then(() => {
    res.status(200).send("Anime deletado com sucesso.")
  }).catch((err) => {
    res.status(404).send("Não foi possivel deletar o anime.")
  })
})

module.exports = router;