
module.exports = function(app) {
    require('./question')(app)
    require('./user')(app)

    require('./rest-anything')(app)

    app.get('/',function(req, res){
        res.render('index')
    })

    app.get('/:page',function(req, res){
        res.render(req.params.page)
    })

    app.get('/steps/:step',function(req, res){
        res.render('steps/'+req.params.step)
    })

}