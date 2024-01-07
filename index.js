const express = require('express')
const path = require('path')
const app = express()
const port = 5000
const basePath = path.join(__dirname, 'templates')
const usersRouter = require('./users')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.static('public'))
app.use(express.json())

app.use('/users', usersRouter)



app.get('/' ,(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`app rodando na porta ${port}`)
})