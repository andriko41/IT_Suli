import { Router } from 'express'
import { authController } from '../controllers/auth.js'

export const authRouter = Router()

authRouter.post('/', authController.LoginUser)
