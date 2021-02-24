import express from "express"
import {getAllProfiles, createProfile , getFollowers, addFollower,getFollowings,addFollowing} from "../controllers/profiles.js";
import auth from "../middleware/auth.js";

 const router = express.Router();

router.get('/',auth, getAllProfiles);
router.post('/',auth, createProfile);

router.get('/followers/:id',auth,getFollowers);
router.post('/followers/:id',auth,addFollower);

router.get('/followings/:id',auth, getFollowings);
router.post('/followings/:id',auth, addFollowing);

export default router;
