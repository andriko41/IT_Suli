import { Router } from 'express'
import { citiesController } from '../controllers/cities.js'

export const citiesRouter = Router()

citiesRouter.get('/', citiesController.GetCity)

citiesRouter.get('/:id', citiesController.GetCityByID)

citiesRouter.post('/', citiesController.AddCity)

citiesRouter.delete('/:id', citiesController.DeleteCity)

citiesRouter.put('/:id', citiesController.UpdateCity)
