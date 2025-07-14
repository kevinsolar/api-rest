import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductsController } from "../controllers/products-controller"

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
productsRoutes.post("/", myMiddleware, productsController.create)

export { productsRoutes }
