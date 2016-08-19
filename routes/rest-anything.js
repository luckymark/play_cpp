/**
 * User: luckystar
 * Date: 13-12-23
 * Time: 上午12:28
 */

var Any = require('../model/anything')

module.exports = function (app) {
    app.get('/api/rest/:collection', function (req, res, fail) {
        Any.getAll(req.params.collection)
            .then(function (entities) {
                res.send(entities)
            }, function (err) {
                fail(err)
            })
    })

    app.get('/api/rest/:collection/:id', function (req, res, fail) {
        Any.get(req.params.collection,req.params.id)
            .then(function (entity) {
                res.send(entity)
            }, function (err) {
                fail(err)
            })
    })

    app.post('/api/rest/:collection', function (req, res, fail) {
        Any.create(req.params.collection,req.body)
            .then(function (entity) {
                res.send(entity)
            }, function (err) {
                fail(err)
            })
    })

    app.put('/api/rest/:collection/:id', function (req, res, fail) {
        Any.update(req.params.collection,req.params.id,req.body)
            .then(function (entity) {
                res.send(entity)
            }, function (err) {
                fail(err)
            })
    })

    app.del('/api/rest/:collection/:id', function (req, res, fail) {
        Any.remove(req.params.collection,req.params.id)
            .then(function (total) {
                if (total==1){
                    res.send('ok')
                }else{
                    fail({error:{msg:'资源不存在'}})
                }
            }, function (err) {
                fail(err)
            })
    })
}