import {
  addCity,
  getCity,
  getCityByID,
  deleteCity,
  updateCity
} from '../data/citiesdb.js'
import { addRule } from '../validators/cities.js'

async function GetCity(req, res) {
  res.json(await getCity())
}

async function GetCityByID(req, res) {
  const { id } = req.params
  res.send(await getCityByID(id))
}

async function AddCity(req, res) {
  try {
    const { name, description, population } = await addRule.validateAsync(
      req.body
    )

    const response = await addCity(name, description, population)
    res.json(response)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteCity(req, res) {
  const { id } = req.params
  await deleteCity(id)
  res.send('succesfully deleted city')
}

async function UpdateCity(req, res) {
  try {
    const { name, description, population } = await addRule.validateAsync(
      req.body
    )
    const { id } = req.params
    await updateCity(id, name, description, population)
    res.send('succesfully updated city')
  } catch (error) {
    res.status(400).send(error)
  }
}

export const citiesController = {
  GetCity,
  GetCityByID,
  AddCity,
  DeleteCity,
  UpdateCity
}
