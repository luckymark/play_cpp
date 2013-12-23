/**
 * Created with JetBrains WebStorm.
 * User: luckystar
 * Date: 13-7-3
 * Time: 下午12:27
 * To change this template use File | Settings | File Templates.
 */

//基于express-validator封装了一个check并自动发送Errors的函数
module.exports = function (req, res, next) {
    req.hasError = function () {
        var errors = req.validationErrors();
        if (errors) {
            next({
                statusCode:400,
                error:{
                    code:40001,
                    errors:errors
                }
            });
            return true;
        }
        return false;
    }
    next();
}