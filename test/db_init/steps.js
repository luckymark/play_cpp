/**
 * User: luckystar
 * Date: 14-1-12
 * Time: 下午12:59
 */

var init = require('./db_init'),
    ObjectId = init.ObjectID;

init.collection('steps')
    .clear()
    .insert([
        {
            "title": "step1",
            "description":"我是第一步哦！",
            "content": "steps/step1.html",
            "_id": ObjectId("52d221d43598efe53e000001")
        },
        {
            "title": "step2",
            "description":"我是第二步哦！",
            "content": "steps/step2.html",
            "_id": ObjectId("52d221d43598efe53e000002")
        }
    ])

