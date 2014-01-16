
var init = require('./db_init'),
    ObjectId = init.ObjectID;

init.collection('users')
    .clear()
    .insert([
        {
            "name": "mark",
            "password": "123",
            "email": "luckyzhigang1@gmail.com",
            "_id": ObjectId("52bbcd98567340d123000001")
        },
        {
            "name": "almond",
            "password": "123",
            "email": "almond@gmail.com",
            "_id": ObjectId("52bbce2b567340d123000002")
        }
    ])

