import { Request,Response } from "express"
import Comment from "../model/commentModel"

export default async(req:Request,res:Response)=>{
    try {
        const commentId = req.params.id
        if(!commentId){
            return res.json({message:"invalid comment id"})
        }
        await Comment.findByIdAndDelete(commentId)
        return res.json({message:"deleted successfully"})
    } catch (error) {
        console.error('Error founded in deleting comment',error);
        
    }
}