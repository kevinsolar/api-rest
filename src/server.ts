import express from "express"
import { myMiddleware } from "./middlewares/my-middleware"

const PORT = 3333
const app = express()
app.use(express.json())

/*
 * Utilizando um Middleware de forma global
 * // app.use(myMiddleware)
 */

app.get("/products", (req, res) => {
	const { page, limit } = req.query

	res.send(`Página ${page} de ${limit}`)
})

/*
 * Para utilizar um middleware de forma "local" ou em um só lugar:
 */
app.post("/products", myMiddleware, (req, res) => {
	const { name, price } = req.body

	res.status(201).json({ name, price, user_id: req.user_id })
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
