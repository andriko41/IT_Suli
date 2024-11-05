import {loginUser} from "../data/userdb.js"
import Joi from 'joi'
import bcrypt from 'bcrypt'

const addRule = Joi.object({
    felhasznaloID: Joi.number(). required(),
    jelszo: Joi.string(). required(). min(3).max(15), 
    jelszoMegerosit:Joi.string(). required(). min(3).max(15)
})

async function LoginUser(req, res) {
    try { const {felhasznaloID,jelszo, jelszoMegerosit} = await addRule.validateAsync(req.body)
        const titkosJelszo = await bcrypt.hash(jelszo, 10)
        const ugyanaz = await bcrypt.compare(jelszoMegerosit, titkosJelszo)
        if (!ugyanaz) {
            res.status(400).send('nem ugyanaz a ket jelszo')
            return
        }
        await loginUser(felhasznaloID)
    res.send('sikeres bejelentkezes')
    }   catch (error) {
    res.status(400).send(error)
    }  
    }
    
    export const authController = {
        LoginUser
    }
    