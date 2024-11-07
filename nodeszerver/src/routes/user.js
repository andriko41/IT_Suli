import { Router } from 'express'
import { userController } from '../controllers/user.js'

export const userRouter = Router()

userRouter.get('/', userController.GetUsers)

userRouter.post('/', userController.AddUser)

userRouter.put('/:felhasznaloID', userController.ModifyUsers)

userRouter.delete('/:felhasznaloID', userController.DeleteUsers)
