import { loginUser } from '../data/userdb.js'
import Joi from 'joi'
import bcrypt from 'bcrypt'

const addRule = Joi.object({
  felhasznaloID: Joi.number().required(),
  loginjelszo: Joi.string().required().min(3).max(15)
})

async function LoginUser(req, res) {
  try {
    const { felhasznaloID, loginjelszo } = await addRule.validateAsync(req.body)
    const jelszo = await loginUser(felhasznaloID)
    console.log(jelszo)
    const ugyanaz = await bcrypt.compare(loginjelszo, jelszo)
    if (!ugyanaz) {
      res.status(400).send('helytelen jelszo')
      return
    }
    res.send('sikeres a belepes')
  } catch (error) {
    res.status(400).send(error)
  }
}

export const authController = {
  LoginUser
}
