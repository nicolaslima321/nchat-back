import Users from '../Models/Users.js'

export default class UserController {
    index (request, response) {
        return response.json({ message: 'It Works!' })
    }
}