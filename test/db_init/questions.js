/**
 * User: luckystar
 * Date: 14-1-19
 * Time: 下午9:08
 */

var init = require('./db_init'),
    ObjectId = init.ObjectID

init.collection('questions')
    .clear()
    .insert([
        {
            "_id": ObjectId("52b70a36d3016112a165cf32"),
            "content": "q2",
            "options": [
                "正确答案",
                "bbbb",
                "ccccc"
            ],
            "answer":0
        },
        {
            "_id": ObjectId("52b710efd3016112a165cf33"),
            "content": "q3",
            "options": [
                "中国",
                "正确答案",
                "ccccc"
            ],
            "answer":1
        },
        {
            "_id": ObjectId("52b710f8d3016112a165cf34"),
            "content": "qqq11123",
            "options": [
                "HTML5 Boilerplate",
                "AngularJS",
                "正确答案"
            ],
            "answer":2
        },
        {
            "_id": ObjectId("52b71145d3016112a165cf35"),
            "content": "q4",
            "options": [
                "美国",
                "bbbb",
                "ccccc",
                "正确答案"
            ],
            "answer":3
        }

    ])