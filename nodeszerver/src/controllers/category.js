import { addCategory, getCategory, deleteCategory, modifyCategory } from "../db.js"


async function GetCategory(req, res) {
    res.send(await getCategory())  
}


async function AddCategory(req, res) {
    const {kategorianev} = req.body
    await addCategory(kategorianev)
    res.send('sikeres')
}


async function ModifyCategory(req, res) {
    const { kategorianev} = req.body
    const {kategoriaID} = req.params
    res.send(await modifyCategory(kategoriaID, kategorianev))
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
