const express = require('express');
const Conn = require('./models/conn/conn')

const app = express();

app.use(express.json());

const routes = require('./routes/animes.routes')
app.use('/',routes)

const port = 3001;

Conn()

app.listen(port, () => {
  console.info(`App rodando em: localhost:${port}`)
})

