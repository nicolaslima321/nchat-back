import UserController from './Controllers/UserController'
const { Router } = require('express')

const userController = new UserController()

const routes = Router()

routes.get('/test', userController.index)

export default routes
