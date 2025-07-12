import express from "express"
import { routes } from "./routes"

const PORT = 3333
const app = express()

app.use(express.json())

// chamo agora as nossas rotas que estao separadas em outro arquivo.
app.use(routes)

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
