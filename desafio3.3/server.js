const express = require('express');
const nunjucks = require('nunjucks')

const server = express();
const courses = require('./data')

server.set('view engine', 'njk')

server.use(express.static('public'))

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function (){
    console.log('server is running')
})

server.get('/', function(req, res){
    const data = {
        title:"Rocketseat",
        imgSrc: "rocketseat.jpg",
        description: 'Nosso objetivo é fazer você decolar para o próximo nível, domine as tecnologias mais modernas do mercado com nosso cursos.',
       
        techTitle:'Tecnologias',
        techs:[
            {icon:'js.png', name:'Javascript'},
            {icon:'nodejs.png', name:'NodeJs'},
            {icon:'reactjs.png', name:'React Js'},
            {icon:'reactnative.png', name:'React Native'},
        ],
        
        linkTitle:'Links',
        links:[
            {name:'Linkedin', icon:'Linkedin.png'},
            {name:'Instagram', icon:'Instagram.png'},
            {name:'Facebook', icon:'facebook.png'}
        ]
    }

    
    return res.render('about', {about: data})
})

server.get('/courses', function (req, res){

    return res.render('courses', {items: courses})
})

server.get('/courses/:id', function(req, res){
    const id = req.params.id

    const course = courses.find(function(course){
        if(course.id == id){
            return true
        }
    })

    if(!course){
        return res.send('Página não encontrada')
    }
    
    res.render('course', {item: course})
    // return res.send(`O id fornecido na rota é ${id}`)
})

server.use(function(req, res){
    res.status(404).render('not-found')
})