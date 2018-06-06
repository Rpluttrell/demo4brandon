const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

const port = 3000

app.use(express.static(__dirname + '/www'))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded())

app.listen(port)

console.log(`server listening on port ${port}`)

app.post('/nameGenerator', upload.fields([]), function(req, res){
    const {firstName, lastName} = req.body
    res.send(`Hello ${firstName} ${lastName}`)
})

app.get('/phoneEcho/:phoneNumber', upload.fields([]), function(req, res){
    const {phoneNumber} = req.params
    res.send(`Your Phone number is ${phoneNumber}`)
})