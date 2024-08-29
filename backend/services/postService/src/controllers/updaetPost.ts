

import mongoose from "mongoose";
import Post from "../model/postModel";

export const updatePost = async(req:Request,res:Response)=>{
    try {
        const {title,content} = req.body
        const update = await Post.upda({
            
        })

    } catch (error) {
        console.error('Error founding in update post',error);
    }
}