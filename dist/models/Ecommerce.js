"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ecommerceSchema = new mongoose_1.Schema({
    ecommerce: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    fundacao: {
        type: Number,
        required: true,
    },
    contato: {
        type: Number,
        required: true,
    }
}, { timestamps: true });
exports.default = mongoose_1.model("Ecommerce", ecommerceSchema);
