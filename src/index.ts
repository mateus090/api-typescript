
// importa o express
import * as express from 'express';
// importa o bodyParser
import * as bodyParser from 'body-parser';

import mongoose = require("mongoose")

// import o ClienteController
//import {ClienteController} from './cliente.controller'

import routes from './routes'

// cria uma instância do express
const server: express.Application = express()

// configura o servidor com o bodyParser
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}));

// monta o ClienteController na rota /cliente
// server.use('/cliente', ClienteController)
server.use(routes)

// define a porta
const porta = 3003;

const uri: string = 'mongodb://localhost:27017'

// conecta no banco de dados e sobe o servidor
mongoose
  .connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() =>
    server.listen(porta, () =>
      console.log(`Server running on http://localhost:${porta}`)
    )
  )
  .catch(error => {
    throw error
  })





