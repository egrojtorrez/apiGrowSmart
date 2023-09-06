import { Router } from 'express'
import { UserController } from '../controllers/user.controller'

const userRouter = Router()

userRouter.post('/signup', UserController.signup)
userRouter.post('/signin', UserController.signin)

export default userRouter
