import { Router } from 'express'
import { comentsController } from '../controllers/coments.js'

export const comentsRouter = Router()

comentsRouter.get('/', comentsController.GetComents)

comentsRouter.post('/', comentsController.AddComents)

comentsRouter.delete('/:hozzaszolasID', comentsController.DeleteComents)

comentsRouter.put('/:hozzaszolasID', comentsController.ModifyComents)
