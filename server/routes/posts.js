import express from "express"
import {getPosts,getPostById, createPost, updatePost, deletePost, likePost, getUserPosts} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

 const router = express.Router();

router.get('/', getPosts);
router.get('/profile/:id',auth, getUserPosts);
router.get('/:id',auth, getPostById);
router.post('/',auth,createPost);
router.patch('/:id',auth, updatePost);
router.delete('/:id',auth, deletePost);
router.patch('/:id/likePost',auth, likePost);
export default router;
