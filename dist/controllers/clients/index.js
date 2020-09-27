"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = exports.deleteClient = exports.addClient = exports.getClients = void 0;
// importa o modelo do client
const Client_1 = require("../../models/Client");
//método para retornar todos os clientes
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //tenta consultar todos os clientes e guardar no vetor de clients
        const clients = yield Client_1.default.find();
        //retorna os clients do MongoDB
        res.status(200).json({ clients });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getClients = getClients;
//método para inserir um client
const addClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //recuperando os dados do formulário do usuário
        const body = req.body;
        // monta um objeto
        const client = new Client_1.default({
            name: body.name,
            rg: body.rg,
            age: body.age,
            address: body.address
        });
        // efetivamento insere no banco de dados
        const newClient = yield client.save();
        // recupere todos os clients depois de inserido
        const allClients = yield Client_1.default.find();
        // vamos retornar o resultado
        res.status(201).json({
            message: "Cliente inserido com sucesso",
            client: newClient,
            clients: allClients
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addClient = addClient;
// método para remover um cliente
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // remove e traz o cliente removido
        const deletedClient = yield Client_1.default.findByIdAndRemove(req.params.id);
        // procurar pelos clientes que sobraram
        const allClients = yield Client_1.default.find();
        res.status(200).json({
            message: "Cliente removido",
            client: deletedClient,
            clientes: allClients // clientes restantes
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteClient = deleteClient;
// método para atualizar um cliente
const updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // params recebe id do lciente que será atualizado e body as informações atualizadas
        const { params: { id }, body, } = req;
        //chama a atualização - altera o client com _id = id e com as novas informações no body
        const updateClient = yield Client_1.default.findByIdAndUpdate({ _id: id }, body);
        // traz todos os clientes no mongo
        const allClients = yield Client_1.default.find();
        //retorna para o front end
        res.status(200).json({
            message: "Cliente atualizado",
            client: updateClient,
            clients: allClients
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.updateClient = updateClient;
