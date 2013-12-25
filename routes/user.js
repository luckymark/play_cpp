/**
 * User: luckystar
 * Date: 13-12-24
 * Time: 下午9:59
 */

var User = require('../model/user')

module.exports = function (app) {
    app.post('/userlogin', function (req, res, fail) {
        req.checkBody('name', '用户名不能为空').notEmpty();
        req.checkBody('password', '密码不能为空').notEmpty();
        if (req.hasError())return;

        User.login({name: req.body.name, password: req.body.password})
            .then(function (user) {
                res.send(user)
            }, function (err) {
                fail(err)
            })
    })

}