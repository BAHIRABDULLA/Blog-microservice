import { Request,Response } from "express";
import Post from "../model/postModel";


export default async(req: Request,res: Response)=>{
    try {
        const postId = req.params.id
        const post  = await Post.findById(postId)
        return res.status(200).json({post})
    } catch (error) {
        console.error('Error founded in fetching post',error);
    }
}