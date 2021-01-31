import Mongoose from "mongoose";
import PostComment from "../models/post-comment.js";


export const getComments = (req, res) => {
    PostComment.find().lean()
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(404).json({ message: error.message }));

};

export const createPostComment = (req, res) => {
    const postId = req.query.postId;
    const comment = req.body;
    const newComment = new PostComment({ ...comment, postId: postId, creator: req.userId, createAt: new Date().toISOString() });

    newComment.save()
        .then(() => {
            res.status(201).json(newComment)
            console.log("newComment",newComment);
        })
        .catch(err => res.status(409).json({ message: err.message }));

}

// export const updatePost = (req, res) => {
//     const { id: _id } = req.params;
//     const post = req.body;
//     if (!Mongoose.Types.ObjectId.isValid(_id)) {
//         return res.status(404).send(`No post with that id: ${_id}`);
//     }
//     PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true }).lean()
//         .then((updatedPost) => {
//             res.status(201).json(updatedPost);
//         })
// }

export const deleteComment = (req, res) => {
    const { id } = req.params;
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No comment with that id: ${_id}`);
    }
    PostComment.findByIdAndRemove(id).lean()
        .then(() => res.json({ message: 'comment deleted successfully' }));

}

export const likeComment = (req, res) => {
    const { id } = req.params;

    if (!req.userId) return res.json({ message: "Unauthenticated" });
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with that id: ${id}`);
    }
    PostComment.findById(id).select("likes").lean()
        .then((result) => {
            const index = result.likes.findIndex((id) => id === String(req.userId));
            if (index === -1) {
                //index not found
                result.likes.push(req.userId);
            } else {
                result.likes = result.likes.filter((id) => id !== String(req.userId));

            }
            PostComment.updateOne({ _id: id }, { likes: result.likes }).lean()
                .then(updatePost => {
                    res.json({ _id: id, likes: result.likes });
                })

        });

}