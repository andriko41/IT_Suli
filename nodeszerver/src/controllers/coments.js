import {addComents, getComents, deleteComents, modifyComents} from "../data/comentsdb.js"
import Joi from 'joi'

const addRule = Joi.object({
    szoveg: Joi.string().required().min(5).max(100),
    felhasznaloID: Joi.number().required(),
    cikkID: Joi.number().required()
  })

async function GetComents(req, res) {
    res.send(await getComents())  
}

async function AddComents(req, res) {
try {const {felhasznaloID, cikkID, szoveg} = await addRule.validateAsync(req.body)
    await addComents(felhasznaloID, cikkID, szoveg)
    res.send('sikeres')
}   catch (error) {
    res.status(400).send(error)
    }
}

async function DeleteComents(req, res) {
    const {hozzaszolasID} = req.params
    res.send(await deleteComents(hozzaszolasID))
}

async function ModifyComents(req, res) {
try {const { szoveg} = await addRule.validateAsync(req.body)
    const {hozzaszolasID} = req.params
    res.send(await modifyComents(hozzaszolasID, szoveg))
}   catch (error) {
    res.status(400).send(error)
    }
}

export const comentsController = {
   GetComents,
   AddComents,
   DeleteComents,
   ModifyComents
}