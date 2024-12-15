import { addRace, getRace, modifyRace, deleteRace } from '../data/racedb.js'
import { addRule } from '../validators/race.js'

async function GetRace(req, res) {
  res.send(await getRace())
}

async function AddRace(req, res) {
  try {
    const { race, description } = await addRule.validateAsync(req.body)
    await addRace(race, description)
    res.send('succesfully created')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function ModifyRace(req, res) {
  try {
    const { race, description } = await addRule.validateAsync(req.body)
    const { raceID } = req.params
    await modifyRace(raceID, race, description)
    res.send('succesfuly added')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteRace(req, res) {
  const { raceID } = req.params
  await deleteRace(raceID)
  res.send('succesfuly deleted')
}

export const raceController = {
  GetRace,
  AddRace,
  ModifyRace,
  DeleteRace
}
