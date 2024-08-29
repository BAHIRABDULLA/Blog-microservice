import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/blogPost')
.then(()=>{
    console.log('mongodb connected');
})
.catch((err)=>{
    console.error('mongodb connection error');
})

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('its herefr ,,,')
})

app.listen(5002,()=>console.log('server running on http://localhost:5002'))