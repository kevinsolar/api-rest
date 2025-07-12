import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductsController } from "../controllers/ProductsController"

const productsRoutes = Router()

/*
 * Utilizando um Middleware de forma global
 * // app.use(myMiddleware)
 */

const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)

/*
 * Para utilizar um middleware de forma "local" ou em um só lugar:
 */
productsRoutes.post("/products", myMiddleware, productsController.create)

export { productsRoutes }
