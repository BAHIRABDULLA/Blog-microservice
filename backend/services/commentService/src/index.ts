import express,{Request,Response} from 'express'
import mongoose from 'mongoose'

const app = express()
mongoose.connect('mongodb://localhost:27017/blogComment')
.then(()=>{
    console.log('mongodb connected');
})
.catch((err)=>{
    console.error('mongodb connection error');
})

app.use(express.json())
app.get('/',(req:Request,res:Response)=>{
    res.send('its running....')
})

app.listen(5003,()=>console.log('server running on http://localhost:5003'))