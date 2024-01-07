const express = require('express')
const router = express.Router()
const path = require('path')
const app = express()



const basePath = path.join(__dirname, '../templates')

app.use(express.static('public'))
router.get('/carrinho', (req, res)=>{
    res.sendFile(`${basePath}/carrinho.html`)
})

router.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/useform.html`)
})

router.post('/save', (req, res)=>{
    
    res.send(`vc conseguiu ${req.body.name}`)

})

module.exports = router