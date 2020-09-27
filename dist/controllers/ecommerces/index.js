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
exports.updateEcommerce = exports.deleteEcommerce = exports.addEcommerce = exports.getEcommerce = void 0;
const Ecommerce_1 = require("../../models/Ecommerce");
const getEcommerce = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ecommerces = yield Ecommerce_1.default.find();
        res.status(200).json({ ecommerces });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getEcommerce = getEcommerce;
const addEcommerce = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const ecommerce = new Ecommerce_1.default({
            ecommerce: body.ecommerce,
            link: body.link,
            fundacao: body.fundacao,
            contato: body.contato,
        });
        const newEcommerce = yield ecommerce.save();
        const allEcommerces = yield Ecommerce_1.default.find();
        res.status(201).json({
            message: "Ecommerce inserido com sucesso",
            ecommerce: newEcommerce,
            ecommerces: allEcommerces
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addEcommerce = addEcommerce;
const deleteEcommerce = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedEcommerce = yield Ecommerce_1.default.findByIdAndRemove(req.params.id);
        const allEcommerces = yield Ecommerce_1.default.find();
        res.status(200).json({
            message: "Ecommerce removido",
            ecommerce: deletedEcommerce,
            ecommerces: allEcommerces
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteEcommerce = deleteEcommerce;
const updateEcommerce = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateEcommerce = yield Ecommerce_1.default.findByIdAndUpdate({ _id: id }, body);
        const allEcommerces = yield Ecommerce_1.default.find();
        res.status(200).json({
            message: "Ecommerce atualizado",
            ecommerce: updateEcommerce,
            ecommerces: allEcommerces
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.updateEcommerce = updateEcommerce;
