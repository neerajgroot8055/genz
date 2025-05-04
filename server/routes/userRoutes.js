import {registerUser,loginUser, userCredits} from '../controllers/userControlller.js'
import express from 'express'
import userAuth from '../middlewares/auth.js'

export const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/credits',userAuth,userCredits)
