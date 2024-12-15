import { Router } from 'express'
import { raceController } from '../controllers/race.js'

export const raceRouter = Router()

raceRouter.get('/', raceController.GetRace)

raceRouter.post('/', raceController.AddRace)

raceRouter.put('/:raceID', raceController.ModifyRace)

raceRouter.delete('/:raceID', raceController.DeleteRace)
