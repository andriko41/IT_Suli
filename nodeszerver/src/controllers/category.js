import { addCategory, getCategory, deleteCategory, modifyCategory } from "../data/categorydb.js"
import Joi from 'joi'

const addRule = Joi.object({
    kategorianev: Joi.string().required().min(3).max(10),
  })


async function GetCategory(req, res) {
    res.send(await getCategory())  
}


async function AddCategory(req, res) {
try { const {kategorianev} = await addRule.validateAsync(req.body)
    await addCategory(kategorianev)
    res.send('sikeres')
}   catch (error) {
    res.status(400).send(error)
    }
}


async function ModifyCategory(req, res) {
try { const { kategorianev} = await addRule.validateAsync(req.body)
    const {kategoriaID} = req.params
    res.send(await modifyCategory(kategoriaID, kategorianev))
}   catch (error) {
    res.status(400).send(error)
    }
}


async function DeleteCategory(req, res) {
    const {kategoriaID} = req.params
    res.send(await deleteCategory(kategoriaID))
}


export const categoryController = {
    GetCategory,
    AddCategory,
    ModifyCategory,
    DeleteCategory
}

