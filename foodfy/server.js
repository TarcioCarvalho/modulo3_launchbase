const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const recipes = require('./data')

nunjucks.configure('views',{
    express:server,
    autoescape: false,
    noCache: true
})


server.use(express.static('public'))

server.set('view engine','njk')

server.listen(3000, function(){
    console.log("server is running")
})

server.get('/', (req, res)=>{
    const index = {
        image:"/assets/chef.png",
        subtitle:"As melhores receitas",
        description:"Aprenda a construir os melhores pratos<br>com receitas criadas por profissionais<br> do mundo inteiro.",
        subtitle2:"Mais acessadas"
    }
    return res.render('index',{recipes, index})
})

server.get('/about', (req, res)=>{
    return res.render('about')
})

server.get('/recipes', (req, res)=>{
    return res.render('recipes', {recipes})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    
    return res.render('info', {recipe: recipes[recipeIndex]})
})


