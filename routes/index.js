
module.exports = function(app) {
    require('./question')(app)

    require('./rest-anything')(app)
}