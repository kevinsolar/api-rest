import { Request, Response } from "express"

class ProductsController {
	/**
	 * index => GET -> listar varios registros.
	 * show => GET -> exibe para apenas um registro.
	 * create => POST -> para criar um registro.
	 * update => PUT -> para atualizar um registro.
	 * remove => DELETE -> para deletar um registro.
	 */

	index(request: Request, response: Response) {
		const { page, limit } = request.query

		response.send(`Página ${page} de ${limit}`)
	}

	create(request: Request, response: Response) {
		const { name, price } = request.body

    throw new Error("Erro de teste")

		response.status(201).json({ name, price, user_id: request.user_id })
	}
}

export { ProductsController }
