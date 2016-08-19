/**
 * User: luckystar
 * Date: 14-1-12
 * Time: 下午12:59
 */

var init = require('./db_init'),
    ObjectId = init.ObjectID

init.collection('steps')
    .clear()
    .insert([
        {
            "_id": ObjectId("52d221d43598efe53e000001"),
            "title": "step1",
            "description":"我是第一步哦！",
            "content": "steps/step1",
            "questions":[
                ObjectId("52b70a36d3016112a165cf32"),
                ObjectId("52b710efd3016112a165cf33"),
                ObjectId("52b710f8d3016112a165cf34")
            ]

        },
        {
            "_id": ObjectId("52d221d43598efe53e000002"),
            "title": "step2",
            "description":"我是第二步哦！",
            "content": "steps/step2",
            "questions":[
                ObjectId("52b71145d3016112a165cf35")
            ]
        }
    ])

