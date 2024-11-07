import {
  addCategory,
  getCategory,
  deleteCategory,
  modifyCategory
} from '../data/categorydb.js'
import { addRule } from '../validators/category.js'

async function GetCategory(req, res) {
  res.send(await getCategory())
}

async function AddCategory(req, res) {
  try {
    const { kategorianev } = await addRule.validateAsync(req.body)
    await addCategory(kategorianev)
    res.send('sikeres')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function ModifyCategory(req, res) {
  try {
    const { kategorianev } = await addRule.validateAsync(req.body)
    const { kategoriaID } = req.params
    await modifyCategory(kategoriaID, kategorianev)
    res.send('sikeres')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteCategory(req, res) {
  const { kategoriaID } = req.params
  await deleteCategory(kategoriaID)
  res.send('sikeres')
}

export const categoryController = {
  GetCategory,
  AddCategory,
  ModifyCategory,
  DeleteCategory
}
