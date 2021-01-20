import Mongoose from "mongoose";
import PostMessage from "../models/post-message.js";


export const getPosts =async (req, res) => {

    PostMessage.find()
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(404).json({ message: error.message }));

};

export const createPost = (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    newPost.save()
        .then(() => res.status(201).json(newPost))
        .catch(err => res.status(409).json({ message: err.message }));

}

export const updatePost = (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!Mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`No post with that id: ${_id}`);
    }
    PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true })
    .then((updatedPost) =>{
        res.status(201).json(updatedPost);
    })
}

export const deletePost = (req,res)=>{
    const {id} = req.params;
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with that id: ${_id}`);
    }
    PostMessage.findByIdAndRemove(id)
    .then(()=>res.json({message: 'Post deleted successfully'}));

}

export const likePost = (req,res)=>{
    const {id} = req.params;
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with that id: ${id}`);
    }
    PostMessage.findById(id)
    .then((post)=>{
        PostMessage.findByIdAndUpdate(id, {likeCount : post.likeCount+1}, { new: true })
        .then(updatePost=> res.json(updatePost));

    });

}