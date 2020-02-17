import Database from '../Database/database.js'

export default class Users {
  save () {
    console.log(`Logging this content ${JSON.stringify(this)}`)
    return Database.users.put(this)
  }

  async find (id) {
    var user = await Database.users.get(id)
      .then((found) => {
        console.log('Its working dude', found)
        return found
      })
      .catch((error) => {
        console.log(' .-. ', error)
      })
    return user
  }
}

Database.users.mapToClass(Users)