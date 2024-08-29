import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/blogUser')
.then(()=>{
    console.log('mongodb connected');
})
.catch((err)=>{
    console.error('mongodb connection error');
})

app.listen(5001,()=>console.log('server running on http://localhost:5001') )