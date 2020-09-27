// importa Router do express
import {Router} from "express"
// importar os métodos do controller do cliente
import {getUser, addUser, updateUser, deleteUser} from '../controllers/users'

import {getEcommerce, addEcommerce, updateEcommerce, deleteEcommerce} from '../controllers/ecommerces'

//cria um objeto da classe Router
const router: Router = Router()

router.get("/users",getUser)

router.post("/add-user", addUser)

router.put("/edit-user/:id", updateUser)

router.delete("/delete-user/:id", deleteUser)

router.get("/ecommerces",getEcommerce)

router.post("/add-ecommerce", addEcommerce)

router.put("/edit-ecommerce/:id", updateEcommerce)

router.delete("/delete-ecommerce/:id", deleteEcommerce)

export default router