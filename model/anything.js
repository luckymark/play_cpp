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

exports.create = function (collection, data) {
    var deferred = Q.defer()
    db.collection(collection).insert(data, deferred.makeNodeResolver())
    return deferred.promise
}

exports.update = function (collection, id, data) {
    var deferred = Q.defer()
    db.collection(collection).update({_id: new db.ObjectID(id)}, data, deferred.makeNodeResolver())
    return deferred.promise
}

exports.remove = function (collection, id) {
    var deferred = Q.defer()
    db.collection(collection).removeById(id, deferred.makeNodeResolver())
    return deferred.promise
}

