import Mongoose from "mongoose";
import PostMessage from "../models/post-message.js";


export const getPosts = (req, res) => {

    PostMessage.find().lean()
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(404).json({ message: error.message }));

};

export const createPost = (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({ ...post, creator: req.userId, createAt: new Date().toISOString() });

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
    PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true }).lean()
        .then((updatedPost) => {
            res.status(201).json(updatedPost);
        })
}

export const deletePost = (req, res) => {
    const { id } = req.params;
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with that id: ${_id}`);
    }
    PostMessage.findByIdAndRemove(id).lean()
        .then(() => res.json({ message: 'Post deleted successfully' }));

}

export const likePost = (req, res) => {
    const { id } = req.params;

    if (!req.userId) return res.json({ message: "Unauthenticated" });
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with that id: ${id}`);
    }
    PostMessage.findById(id).select("likes").lean()
        .then((result) => {
            const index = result.likes.findIndex((id) => id === String(req.userId));
            if (index === -1) {
                //index not found
                result.likes.push(req.userId);
            } else {
                result.likes = result.likes.filter((id) => id !== String(req.userId));

            }
            PostMessage.updateOne({_id:id},{ likes: result.likes }).lean()
                .then(updatePost => {
                    res.json({ _id: id, likes: result.likes});
                })

        });

}

export const getUserPosts = (req,res)=>{
    const { id } = req.params;
    PostMessage.find({creator:id}).lean()
    .then(result=>res.status(200).json(result))
    .catch(error=>res.status(404).json({ message: error.message }));

}
export const getPostById = (req,res)=>{
    const {id} = req.params;
    PostMessage.findById(_id).lean()
    .then(result=>res.status(200).json(result))
    .catch(error=>res.status(404).json({ message: error.message }));
}