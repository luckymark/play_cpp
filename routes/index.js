
module.exports = function(app) {
    require('./question')(app)
    require('./user')(app)

    require('./rest-anything')(app)
}