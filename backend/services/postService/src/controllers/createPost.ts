import { Request,Response } from "express"
import Post from "../model/postModel";

export default async(req:Request,res:Response)=>{
    try {
        const {title,content}= req.body
        const post = new Post({title,content})
        await post.save()
    } catch (error) {
        console.error('Error updating data',error);
        
    }
}