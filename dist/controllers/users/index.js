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
exports.updateUser = exports.deleteUser = exports.addUser = exports.getUser = void 0;
// importa o modelo do client
const User_1 = require("../../models/User");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        res.status(200).json({ users });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getUser = getUser;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const user = new User_1.default({
            name: body.name,
            age: body.age,
            uf: body.uf,
            city: body.city,
            email: body.email
        });
        const newUser = yield user.save();
        const allUsers = yield User_1.default.find();
        res.status(201).json({
            message: "Usuário inserido com sucesso",
            user: newUser,
            users: allUsers
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addUser = addUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield User_1.default.findByIdAndRemove(req.params.id);
        const allUsers = yield User_1.default.find();
        res.status(200).json({
            message: "Usuário removido",
            user: deletedUser,
            users: allUsers
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateUser = yield User_1.default.findByIdAndUpdate({ _id: id }, body);
        const allUsers = yield User_1.default.find();
        res.status(200).json({
            message: "Usuário atualizado",
            user: updateUser,
            users: allUsers
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.updateUser = updateUser;
