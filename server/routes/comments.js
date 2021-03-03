import express from "express"
import {getComments, createPostComment, deleteComment, likeComment } from "../controllers/comment.js";
import auth from "../middleware/auth.js";

 const router = express.Router();

router.get('/',getComments);
router.post('/',createPostComment);
router.delete('/:id', deleteComment);
router.patch('/:id/likePost',auth, likeComment);
// router.patch('/:id',auth, updateComment);
export default router;