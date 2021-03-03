import express from "express"
import {getAllProfiles, createProfile , getFollowers, addFollower,getFollowings,addFollowing} from "../controllers/profiles.js";
import auth from "../middleware/auth.js";

 const router = express.Router();

router.get('/', getAllProfiles);
router.post('/',auth, createProfile);

router.get('/followers/:id',getFollowers);
router.post('/followers/:id',addFollower);

router.get('/followings/:id', getFollowings);
router.post('/followings/:id', addFollowing);

export default router;
