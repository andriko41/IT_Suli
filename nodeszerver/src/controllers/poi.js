import {
  addPoi,
  getPoiByID,
  getPoi,
  deletePoi,
  modifyPoi
} from '../data/poidb.js'
import { addRule } from '../validators/Poi.js'

async function GetPoi(req, res) {
  res.send(await getPoi())
}

async function GetPoiByID(req, res) {
  const { id } = req.params
  res.send(await getPoiByID(id))
}

async function AddPoi(req, res) {
  try {
    const { name, description, cityID } = await addRule.validateAsync(req.body)
    await addPoi(name, description, cityID)
    res.send('succesfully added Point')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function ModifyPoi(req, res) {
  try {
    const { name, description, cityID } = await addRule.validateAsync(req.body)
    const { poiID } = req.params
    await modifyPoi(poiID, name, description, cityID)
    res.send('succesfully modified Point')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeletePoi(req, res) {
  const { poiID } = req.params
  await deletePoi(poiID)
  res.send('succesfully deleted Point')
}

export const poiController = {
  GetPoi,
  GetPoiByID,
  AddPoi,
  ModifyPoi,
  DeletePoi
}
