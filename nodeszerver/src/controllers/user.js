import { getUsers, addUsers, modifyUsers, deleteUsers } from '../data/userdb.js'
import Joi from 'joi'
import bcrypt from 'bcrypt'

const addRule = Joi.object({
  nev: Joi.string().required().min(3).max(15),
  jelszo: Joi.string().required().min(3).max(15),
  email: Joi.string().required().min(8).max(30),
  jelszoMegerosit: Joi.string().required().min(3).max(15)
})

const modifyRule = Joi.object({
  nev: Joi.string().required().min(3).max(15),
  email: Joi.string().required().min(8).max(30)
})
async function GetUsers(req, res) {
  res.send(await getUsers())
}

async function AddUser(req, res) {
  try {
    const { nev, jelszo, email, jelszoMegerosit } = await addRule.validateAsync(
      req.body
    )
    const titkosJelszo = await bcrypt.hash(jelszo, 10)
    const ugyanaz = await bcrypt.compare(jelszoMegerosit, titkosJelszo)
    if (!ugyanaz) {
      res.status(400).send('nem ugyanaz a ket jelszo')
      return
    }
    await addUsers(nev, titkosJelszo, email)
    res.send('sikeres')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function ModifyUsers(req, res) {
  try {
    const { email, nev } = await modifyRule.validateAsync(req.body)
    const { felhasznaloID } = req.params
    await modifyUsers(felhasznaloID, nev, email)
    res.send('sikeres')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteUsers(req, res) {
  const { felhasznaloID } = req.params
  await deleteUsers(felhasznaloID)
  res.send('sikeres')
}

export const userController = {
  GetUsers,
  AddUser,
  ModifyUsers,
  DeleteUsers
}
