/**
 * Created with JetBrains WebStorm.
 * User: luckystar
 * Date: 13-6-8
 * Time: 下午4:59
 * To change this template use File | Settings | File Templates.
 */

var setting = require('../setting')

var db = require("mongoskin").db(setting.mongodb, {safe:true});

db.DbErrors = {};

db.registErrors = function (collection, errors) {
    db.DbErrors[collection] = errors;
};

db.hasError = function (err, fail, collection) {
    if (!err) return false;
    logger.error(err.message);
    if (collection && err.name == 'MongoError' && db.DbErrors[collection] &&db.DbErrors[collection][err.code]) {
        fail(db.DbErrors[collection][err.code]);
    } else {
        fail({error:err});
    }
};

db.getObjectId = function(id){
    return db.bson_serializer.ObjectID.createFromHexString(id);
};

module.exports = db;

