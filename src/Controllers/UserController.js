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
      .then((data) => {
        console.log('User successfully saved!')
        return response.json({ message: 'User successfully saved!', content: JSON.stringify(data) })
      })
      .catch((error) => {
        console.log('User could not be saved!')
        return response.json({ error: 'User could not be saved!', error: JSON.stringify(error) })
      })
  }
}

export default UserController