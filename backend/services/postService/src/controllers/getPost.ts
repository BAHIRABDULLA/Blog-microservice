import { Request,Response } from "express";
import Post from "../model/postModel";


export const getPost = async(req: Request,res: Response)=>{
    try {
        const post  = await Post.find()
        return res.status(200).json({post})
    } catch (error) {
        console.error('Error founded in fetching post',error);
    }
}