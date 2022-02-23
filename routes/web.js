import express from 'express'
const router = express.Router()
import UserController from '../controller/userController.js'

router.get('/login', UserController.login)
router.post('/login', UserController.verifyLogin)
router.get('/registration', UserController.registration)
router.post('/registration', UserController.createUser)

export default router