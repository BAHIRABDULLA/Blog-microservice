import { Request,Response } from "express"
import Comment from "../model/commentModel"

export default async(req:Request,res:Response)=>{
    try {
        const commentId = req.params.id
        const {comment}= req.body
        const updateComment = await Comment.findByIdAndUpdate(commentId,{comment})
        return res.json({message:"edit successfully"})
    } catch (error) {
        console.error('Error founding on edit comment',error);
    }
}