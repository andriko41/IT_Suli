import { getUsers, addUsers, modifyUsers, deleteUsers } from '../data/userdb.js'
import { addRule, modifyRule } from '../validators/user.js'
import bcrypt from 'bcrypt'

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
      res.status(400).send('password doesnt match')
      return
    }
    await addUsers(nev, titkosJelszo, email)
    res.send('succesfully created user')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function ModifyUsers(req, res) {
  try {
    const { email, nev } = await modifyRule.validateAsync(req.body)
    const { felhasznaloID } = req.params
    await modifyUsers(felhasznaloID, nev, email)
    res.send('succesfully modified user')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteUsers(req, res) {
  const { felhasznaloID } = req.params
  await deleteUsers(felhasznaloID)
  res.send('succesfully deleted')
}

export const userController = {
  GetUsers,
  AddUser,
  ModifyUsers,
  DeleteUsers
}
