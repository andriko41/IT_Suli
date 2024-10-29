import { addArticle, getArticle, modifyArticle, deleteArticle } from "../data/articledb.js";

async function GetArticle(req, res) {
    res.send(await getArticle())  
}

async function AddArticle(req, res) {
    const {cikkcim, szerzoID, szoveg, kategoriaID} = req.body
    await addArticle(cikkcim, szerzoID, szoveg, kategoriaID)
    res.send('sikeres')
}

async function ModifyArticle(req, res) {
    const {cikkcim, szoveg} = req.body
    const {cikkID} = req.params
    res.send(await modifyArticle(cikkID, cikkcim,  szoveg,))
}

async function DeleteArticle(req, res) {
    const {cikkID} = req.params
    res.send(await deleteArticle(cikkID))
}

export const articleController = {
    GetArticle,
    AddArticle,
    ModifyArticle,
    DeleteArticle
}