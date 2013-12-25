require('./utils/log')

var express = require('express')
    , app = express()
    , expressValidator = require('express-validator')
    , server = require('http').createServer(app)
    , util = require('util')
    , setting = require('./setting')

app.configure(function () {
    app.set('port', process.env.PORT || setting.port)
    app.use(express.logger())

    app.use("/app", express["static"](__dirname + "/app"));

    app.use(express.cookieParser())
    app.use(express.session({
        secret: setting.cookieSecret
    }))

    app.use(express.logger())
    app.use(express.bodyParser({
        "keepExtensions":true,
        "uploadDir":__dirname + "/uploads"
    }))
    app.use(expressValidator())
    app.use(require('./utils/request-params-checker'))

    require("./routes")(app)

    app.use(function (err, req, res, next) {
        console.log('app.js/43 err: %s', JSON.stringify(err))
        res.send(err.statusCode || 500, err.error)
    })
})

app.configure("development", function () {
    app.use(express.errorHandler({
        dumpExceptions: true
        , showStack: true
    }))

    app.locals.pretty = true
})

app.configure("production", function () {
    app.use(express.errorHandler())
})

server.listen(app.get('port'), function () {
    logger.info('Express server listening on port ' + app.get('port'))
})
