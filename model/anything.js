/**
 * User: luckystar
 * Date: 13-12-23
 * Time: 上午12:33
 */

var Q = require('q')

var db = require('../utils/DB')

exports.get = function (collection, id) {
    var deferred = Q.defer()
    db.collection(collection).findById(id, deferred.makeNodeResolver())
    return deferred.promise
}

exports.getAll = function (collection) {
    var deferred = Q.defer()
    db.collection(collection).find().toArray(deferred.makeNodeResolver())
    return deferred.promise
}