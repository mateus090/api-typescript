"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
// importe as classes TS do express
const express_1 = require("express");
//Criar instância de Router
const router = express_1.Router();
router.get('/', (req, res) => {
    // Retorna uma mensagem para o cliente
    res.send('Bom dia cliente, obrigado pela sua consulta');
});
router.get('/:nome', (req, res) => {
    let nome = req.params.nome;
    res.send(`Bom dia ${nome}, obrigado pela sua consulta`);
});
//exporta o objeto router para ser utilizado externamente
exports.ClienteController = router;
