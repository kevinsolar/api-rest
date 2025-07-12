import {Router} from 'express'
import { myMiddleware } from '../middlewares/my-middleware'

const productsRoutes = Router()

/*
 * Utilizando um Middleware de forma global
 * // app.use(myMiddleware)
 */

productsRoutes.get("/:id", (req, res) => {
	const { page, limit } = req.query
  const {id} = req.params

	res.send(`Página ${page} de ${limit} - ID: ${id}`)
})

/*
 * Para utilizar um middleware de forma "local" ou em um só lugar:
 */
productsRoutes.post("/products", myMiddleware, (req, res) => {
	const { name, price } = req.body

	res.status(201).json({ name, price, user_id: req.user_id })
})

export { productsRoutes }