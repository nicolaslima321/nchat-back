import UserController from './Controllers/UserController'
import { Router } from 'express'

const userController = new UserController()

const routes = Router()

routes.get('/user', userController.index)

routes.get('/user/store', userController.store)

routes.get('/user/:userId', userController.get)

export default routes
