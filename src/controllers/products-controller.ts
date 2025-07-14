import { Request, Response } from "express"
import { AppError } from "../utils/app-error"
import { z } from "zod"

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
		/*
    Antes desestrutravamos o name e o price direto da request.body, mas agora utilizaremos nosso bodySchema para isso.
    const { name, price } = request.body
    */

		const bodySchema = z.object({
			name: z.string(),
			price: z.number(),
		})

		const { name, price } = bodySchema.parse(request.body)

		/*
    if (!name) {
      throw new AppError("Nome do produto é obrigatorio!", 400)
    }
    if (name.length < 6) {
      throw new AppError("Nome do produto deve ter no mínimo 6 caracteres!")
    }
    if (!price) {
      throw new AppError("Preço do produto é obrigatório!")
    }
    if (price < 0) {
      throw new AppError("Preço não pode ser menor que 0!")
    }
      */

		// throw new AppError("Erro interno!")

		response.status(201).json({ name, price, user_id: request.user_id })
	}
}

export { ProductsController }
