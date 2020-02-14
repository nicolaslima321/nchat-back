import Database from '../Database/database.js'

export default class Users {
    save() {
        console.log(`Logging this content ${this}`)
        return Database.friends.put(this)
    }

    find(id) {
        return Database.friends.get(id)
    }
}

Database.users.mapToClass(Users)