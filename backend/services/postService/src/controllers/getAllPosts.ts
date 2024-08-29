import Post from "../model/postModel";
import { Request,Response } from "express";

export const getAllPosts = async (req:Request,res:Response)=>{
    try {
        const posts = await Post.find()
    } catch (error) {
        console.error('Error fouinded in get all post ',error);
    }
}