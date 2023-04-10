import { Router } from 'express'
import UserController from '../../../controllers/user.controller'

const userRoutes = Router()
const userController = new UserController()

// userRoutes.use(userController.middleware)

// GET USER BY ID
userRoutes.get('/:id', userController.getUser)
// SET USER BY ID
userRoutes.post('/:id', userController.postUser)
// GENERATE USER - RETURN USER MOCK
userRoutes.get('/generate', userController.generateUser)
// GET USER SETTINGS
userRoutes.get('/settings', userController.getUserSettings)
// SET USER SETTINGS
userRoutes.post('/settings', userController.postUserSettings)

export default userRoutes
