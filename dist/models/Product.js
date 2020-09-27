"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// vamos criar um esquema do mongoose para IProduct
const productSchema = new mongoose_1.Schema({
    description: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true });
//vamos exportar um modelo que é do tipo cliente, um documento MongoDB
//Client é o nome desse modelo
exports.default = mongoose_1.model("Product", productSchema);
