import Dexie from 'dexie';
import indexedDB from 'fake-indexeddb';

const Database = new Dexie('NChat', { indexedDB: indexedDB });

Database.version(1).stores({
    users: "++id, name, email, password, &celphone",
    friends: "++id, &user_id, &friend_id",
    messages: "++id, message_id, content, sender_id, receiver_id"

});

export default Database;