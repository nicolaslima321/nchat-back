import Users from '../Models/Users.js'
const user = new Users()

class UserController {
  index (request, response) {
    return response.json({ message: 'It Works!' })
  }

  store (request, response) {
    user.name = 'Lorem Ipsum Dolor Sit Amet'
    user.email = 'Lorem@ipsum.dolor'
    user.password = 'Lorem'
    user.celphone = '(00) 0000 0000'

    user.save()
    var storedUser = user.find(1)
    return response.json({ user: storedUser })
  }
}

export default UserController