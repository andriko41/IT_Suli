import { Router } from 'express'
import { poiController } from '../controllers/poi.js'

export const poiRouter = Router()

poiRouter.get('/', poiController.GetPoi)

poiRouter.get('/:id', poiController.GetPoi)

poiRouter.post('/', poiController.AddPoi)

poiRouter.put('/:id', poiController.ModifyPoi)

poiRouter.delete('/:id', poiController.DeletePoi)
