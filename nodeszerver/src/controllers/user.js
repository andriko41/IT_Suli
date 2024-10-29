import { getUsers,addUsers,modifyUsers, deleteUsers } from "../data/userdb.js"
import Joi from 'joi'

const addRule = Joi.object({
    nev: Joi.string(). required(). min(3),
    email: Joi.string(). required(). min(8)
})
 async function GetUsers(req, res) {
    res.send(await getUsers())  
}

 async function AddUser(req, res) {
 try{
    const {nev, email} = await addRule.validateAsync(req.body)
    await addUsers(nev, email)
    res.send('sikeres')
 }   catch (error) {
        res.status(400).send(error)
    }
}

 async function ModifyUsers(req, res) {
    const {email, nev} = req.body
    const {felhasznaloID} = req.params
    res.send(await modifyUsers(felhasznaloID, nev, email))
}

 async function DeleteUsers(req, res) {
    const {felhasznaloID} = req.params
    res.send(await deleteUsers(felhasznaloID))
}

export const userController = {
    GetUsers,
    AddUser,
    ModifyUsers,
    DeleteUsers
}
