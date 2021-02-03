import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    name:String,
    tags:[String],
    isGoogleLogin:Boolean,
    avatarSrc:String,
    selectedFile:String,
    likes:{
        type:[String],
        default:[],
    },
    createAt:{
        type:Date,
        default:new Date()
    }
});


const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
