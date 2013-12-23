/**
 * User: luckystar
 * Date: 13-12-21
 * Time: 上午10:28
 */
var Question = require('../model/question')

module.exports = function (app) {
    app.get('/question', function (req, res, fail) {
        Question.getAll()
            .then(function (users) {
                res.send(users)
            }, function (err) {
                fail(err)
            })
    })

    app.get('/question/:id', function (req, res, fail) {
        Question.get(req.params.id)
            .then(function (user) {
                res.send(user)
            }, function (err) {
                fail(err)
            })
    })
}