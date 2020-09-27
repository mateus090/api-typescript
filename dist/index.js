"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa o express
const express = require("express");
// importa o bodyParser
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// import o ClienteController
//import {ClienteController} from './cliente.controller'
const routes_1 = require("./routes");
// cria uma instância do express
const server = express();
// configura o servidor com o bodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
// monta o ClienteController na rota /cliente
// server.use('/cliente', ClienteController)
server.use(routes_1.default);
// define a porta
const porta = 3003;
const uri = 'mongodb://localhost:27017';
// conecta no banco de dados e sobe o servidor
mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => server.listen(porta, () => console.log(`Server running on http://localhost:${porta}`)))
    .catch(error => {
    throw error;
});
