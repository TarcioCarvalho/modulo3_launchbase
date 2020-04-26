const express = require('express');
const nunjucks = require('nunjucks')

const server = express();
const cards = require('./data')

server.set('view engine', 'njk')

server.use(express.static('public'))

nunjucks.configure('views', {
    express:server
})

server.listen(5000, function (){
    console.log('server is running')
})

server.get('/', function(req, res){
    res.render('about')
})

server.get('/courses', function (req, res){

    res.render('courses', {items: cards})
})

server.use(function(req, res){
    res.status(404).render('not-found')
})