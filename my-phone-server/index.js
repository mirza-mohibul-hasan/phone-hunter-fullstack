const express = require('express')
var cors = require('cors')
const phones = require('./phones.json')
const app = express()
const port  = 5000
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello from Express')
})

app.get('/phones', (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
    const pid = parseInt(req.params.id);
    const phone = phones.find(ph => ph.id === pid)
    res.send(phone);
})

app.listen(port, ()=>{
    console.log( `Express is running on port ${port}`)
})