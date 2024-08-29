import mongoose, { Schema, Document } from "mongoose";

interface IComment extends Document {
    comment: string;

}
const commentSchema = new Schema<IComment>({
    comment: {
        type: String
    }
},{
    timestamps:true
})

const Comment = mongoose.model<IComment>('Comment', commentSchema)