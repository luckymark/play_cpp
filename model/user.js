/**
 * User: luckystar
 * Date: 13-12-24
 * Time: 下午9:58
 */

var Q = require('q')

var db = require('../utils/DB')
db.bind("users")

exports.login =function (user){
    var deferred = Q.defer()
    db.users.findOne(user, deferred.makeNodeResolver())
    return deferred.promise
}