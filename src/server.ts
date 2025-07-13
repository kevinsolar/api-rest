import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes"
import { AppError } from "./utils/AppError"

const PORT = 3333
const app = express()

app.use(express.json())

// chamo agora as nossas rotas que estao separadas em outro arquivo.
app.use(routes)

// tratando excecoes, devem ser utilizadas essa funcoes sempre no final, antes da porta.
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({ error: error.message })
	}

	response.status(500).json({ error: error.message })
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
