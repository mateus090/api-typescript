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
exports.updateProduct = exports.deleteProduct = exports.addProduct = exports.getProduct = void 0;
// importa o modelo do client
const Product_1 = require("../../models/Product");
//método para retornar todos os clientes
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //tenta consultar todos os clientes e guardar no vetor de clients
        const products = yield Product_1.default.find();
        //retorna os clients do MongoDB
        res.status(200).json({ products });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getProduct = getProduct;
//método para inserir um client
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //recuperando os dados do formulário do usuário
        const body = req.body;
        // monta um objeto
        const client = new Product_1.default({
            description: body.description,
            qty: body.qty,
            price: body.price,
        });
        // efetivamento insere no banco de dados
        const newProduct = yield client.save();
        // recupere todos os clients depois de inserido
        const allProducts = yield Product_1.default.find();
        // vamos retornar o resultado
        res.status(201).json({
            message: "Produto inserido com sucesso",
            product: newProduct,
            products: allProducts
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addProduct = addProduct;
// método para remover um cliente
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // remove e traz o cliente removido
        const deletedProduct = yield Product_1.default.findByIdAndRemove(req.params.id);
        // procurar pelos clientes que sobraram
        const allProducts = yield Product_1.default.find();
        res.status(200).json({
            message: "Produto removido",
            product: deletedProduct,
            products: allProducts // clientes restantes
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteProduct = deleteProduct;
// método para atualizar um cliente
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // params recebe id do lciente que será atualizado e body as informações atualizadas
        const { params: { id }, body, } = req;
        //chama a atualização - altera o client com _id = id e com as novas informações no body
        const updateProduct = yield Product_1.default.findByIdAndUpdate({ _id: id }, body);
        // traz todos os clientes no mongo
        const allProducts = yield Product_1.default.find();
        //retorna para o front end
        res.status(200).json({
            message: "Produto atualizado",
            product: updateProduct,
            products: allProducts
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.updateProduct = updateProduct;
