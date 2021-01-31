import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    postId:Object,
    message:String,
    creator:String,
    name:String,
    isGoogleLogin:Boolean,
    avatarSrc:String,
    likes:{
        type:[String],
        default:[],
    },
    createAt:{
        type:Date,
        default:new Date()
    }
});


const PostComment = mongoose.model('PostComment', commentSchema);

export default PostComment;
