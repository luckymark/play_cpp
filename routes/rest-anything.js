/**
 * User: luckystar
 * Date: 13-12-23
 * Time: 上午12:28
 */

var Any = require('../model/anything')

module.exports = function (app) {
    app.get('/rest/:collection', function (req, res, fail) {
        Any.getAll(req.params.collection)
            .then(function (entities) {
                res.send(entities)
            }, function (err) {
                fail(err)
            })
    })

    app.get('/rest/:collection/:id', function (req, res, fail) {
        Any.get(req.params.collection,req.params.id)
            .then(function (enty) {
                res.send(enty)
            }, function (err) {
                fail(err)
            })
    })
}