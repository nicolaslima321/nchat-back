import Users from '../Models/Users.js'
const user = new Users()

class UserController {
  index (request, response) {
    return response.json({ message: 'It Works!' })
  }

  get (request, response) {
    var userId = request.params.userId
    return response.json({ user: user.find(userId) })
  }

  store (request, response) {
    var data = request.body

    user.name = data.name
    user.email = data.email
    user.password = data.password
    user.celphone = data.celphone

    user.save()
      .then(() => {
        return response.json({ message: 'User successfully saved', user: storedUser })
      })
      .catch((error) => {
        return response.json({ message: 'User could not be saved', error: error })
      })
  }
}

export default UserController