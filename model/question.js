/**
 * User: luckystar
 * Date: 13-12-21
 * Time: 上午10:12
 */

var Q = require('q')

var db = require('../utils/DB')
db.bind("questions")

exports.get =function (id){
    var deferred = Q.defer()
    db.questions.findById(id, deferred.makeNodeResolver())
    return deferred.promise
}

exports.getAll =function (){
    var deferred = Q.defer()
    db.questions.find().toArray(deferred.makeNodeResolver())
    return deferred.promise
}