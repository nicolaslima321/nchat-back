import Database from '../Database/database.js'

export default class Users {
    save() {
        return Database.friends.put(this)
    }

    find(id) {
        return Database.friends.get(id)
    }
}

Database.users.mapToClass(Users)