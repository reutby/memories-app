import express from "express"
import {getPosts,getPostById, createPost, updatePost, deletePost, likePost} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

 const router = express.Router();

router.get('/', getPosts);
//router.get('/profile/:id', getUserPosts);
router.get('/:id', getPostById);
router.post('/',auth,createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost',auth, likePost);
export default router;
