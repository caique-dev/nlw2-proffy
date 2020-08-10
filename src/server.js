const 
    express = require('express'),
    server = express(),
    nunjucks = require('nunjucks'),
    { pageLanding, pageGiveClasses, pageStudy,saveClasses } = require('./pages')

// config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// staticos
server.use(express.static('public'))

// liberando o post
server.use(express.urlencoded({ extended: true }))

// rotas
server
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses )

// porta observada
server.listen(3000)