// Server index
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors  =  require('cors')

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}))

mongoose
.connect(process.env.MONGO_DEV_CONNECTION_URI,  {useNewUrlParser:true, useUnifiedTopology: true})
.then(res=> {
    console.log('connected to DB')
})
.catch(err=> {
    if(err) throw err
})

app.get('/', (req,res)=> {
    res.send('Hello there')
})

app.get('/api/test', (req,res)=> {
    mongoose.model('test').find().then(result=> res.json(result))
})

app.post('/api/test', (req,res)=> {
    console.log(req.body)
    mongoose.model('test').insertMany(req.body).then(result=> res.send(result))
})

mongoose.model('test', {name: String}, "test")


app.listen(4000, ()=>{
    console.log('listening on port 4000')
})