"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa Router do express
const express_1 = require("express");
// importar os métodos do controller do cliente
const users_1 = require("../controllers/users");
const ecommerces_1 = require("../controllers/ecommerces");
//cria um objeto da classe Router
const router = express_1.Router();
router.get("/users", users_1.getUser);
router.post("/add-user", users_1.addUser);
router.put("/edit-user/:id", users_1.updateUser);
router.delete("/delete-user/:id", users_1.deleteUser);
router.get("/ecommerces", ecommerces_1.getEcommerce);
router.post("/add-ecommerce", ecommerces_1.addEcommerce);
router.put("/edit-ecommerce/:id", ecommerces_1.updateEcommerce);
router.delete("/delete-ecommerce/:id", ecommerces_1.deleteEcommerce);
exports.default = router;
