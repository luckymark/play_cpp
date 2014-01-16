/**
 * User: luckystar
 * Date: 13-12-27
 * Time: 下午2:45
 */

var setting = require('../../setting')
    , db = require("mongoskin").db(setting.mongodb, {safe: true})
    , collection = ""

module.exports = {
    ObjectID: function (id){
       return  new db.ObjectID(id);
    },
    _collection: "",
    collection: function (c) {
        collection = c
        return this
    }, clear: function () {
        db.collection(collection).drop(function (err) {
            console.log(err)
        })
        return this
    }, insert: function (docs) {
        db.collection(collection).insert(docs, function (err) {
            console.log(err)
        })
        return this
    }, remove: function (ids) {
        for (i in ids) {
            db.collection(collection).removeById(ids[i], function (err) {
                console.log(err)
            })
        }
        return this
    }
}