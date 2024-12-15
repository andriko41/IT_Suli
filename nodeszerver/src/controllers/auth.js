import { loginUser } from '../data/userdb.js'
import { addRule } from '../validators/auth.js'
import bcrypt from 'bcrypt'

async function LoginUser(req, res) {
  try {
    const { email, loginjelszo } = await addRule.validateAsync(req.body)
    const jelszo = await loginUser(email)
    const ugyanaz = await bcrypt.compare(loginjelszo, jelszo)
    if (!ugyanaz) {
      res.status(400).send('helytelen jelszo')
      return
    }
    res.send('succesfull login')
  } catch (error) {
    res.status(400).send(error)
  }
}

export const authController = {
  LoginUser
}
