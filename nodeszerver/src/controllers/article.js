import { addArticle, getArticle, modifyArticle, deleteArticle } from "../data/articledb.js";
import Joi from 'joi'

const addRule = Joi.object({
    cikkcim: Joi.string().required().min(3),
    szoveg: Joi.string().required().min(5).max(100),
    szerzoID: Joi.number().required(),
   kategoriaID: Joi.number().required()
  })

async function GetArticle(req, res) {
    res.send(await getArticle())  
}

async function AddArticle(req, res) {
try { const {cikkcim, szerzoID, szoveg, kategoriaID} = await addRule.validateAsync(req.body)
    await addArticle(cikkcim, szerzoID, szoveg, kategoriaID)
    res.send('sikeres')
}   catch (error) {
    res.status(400).send(error)
    }
}

async function ModifyArticle(req, res) {
try { const {cikkcim, szoveg} = await addRule.validateAsync(req.body)
    const {cikkID} = req.params
    res.send(await modifyArticle(cikkID, cikkcim,  szoveg,))
}   catch (error) {
    res.status(400).send(error)
    }    
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