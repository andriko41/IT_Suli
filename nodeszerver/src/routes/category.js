import { Router } from 'express'
import { categoryController } from '../controllers/category.js'

export const categoryRouter = Router()

categoryRouter.get('/', categoryController.GetCategory)

categoryRouter.post('/', categoryController.AddCategory)

categoryRouter.put('/:kategoriaID', categoryController.ModifyCategory)

categoryRouter.delete('/:kategoriaID', categoryController.DeleteCategory)
