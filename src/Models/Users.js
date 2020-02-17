import Database from '../Database/database.js'

export default class Users {
  save () {
    console.log(`Logging this content ${JSON.stringify(this)}`)
    return Database.users.put(this)
  }

  async find (id) {
    var user = await Database.users.get(id)
      .then((found) => {
        return found
      })
      .catch((error) => {
        console.log('An error ocurred while searching for this user ID', error)
      })
    return user
  }
}

Database.users.mapToClass(Users)