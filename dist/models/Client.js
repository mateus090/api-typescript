"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// vamos criar um esquema do mongoose para IClient
const clientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
}, { timestamps: true });
//vamos exportar um modelo que é do tipo cliente, um documento MongoDB
//Client é o nome desse modelo
exports.default = mongoose_1.model("Client", clientSchema);
