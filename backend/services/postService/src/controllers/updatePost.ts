
import { Request,Response } from "express";
import mongoose from "mongoose";
import Post from "../model/postModel";

export const updatePost = async(req:Request,res:Response)=>{
    try {
        const postId  = req.params.id
        const {title,content} = req.body
        const update = await Post.findByIdAndUpdate(postId,{title,content})
        return res.json({message:"updation completed"})
    } catch (error) {
        console.error('Error founding in update post',error);
    }
}