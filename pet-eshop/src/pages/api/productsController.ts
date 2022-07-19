import type { NextApiRequest, NextApiResponse } from "next"
import prisma from '../../../prisma/prisma'
import { IProduct } from "../../types/IProduct"

class productsController{
    async getProducts(req: NextApiRequest, res: NextApiResponse){
        const products = prisma.product.findMany()
        res.send(products)
    }
    
    async addProduct(req: NextApiRequest, res: NextApiResponse){
        const product = {}
    }
}
