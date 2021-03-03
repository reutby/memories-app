import Mongoose from "mongoose";
import Profile from "../models/profile.js";


export const getAllProfiles = (req, res) => {

    Profile.find().lean()
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(404).json({ message: error.message }));

};

export const createProfile = (req, res) => {
    const profile = req.body;
    Profile.findOne({ userId: req.userId }).
        then(result => {
            console.log(result);
            if (result) {
                return res.status(200).json({ message: 'Profile already exist' });
            }
            const newProfile = new Profile({ ...profile, userId: req.userId });
            newProfile.save()
                .then(() => res.status(201).json(newProfile))
                .catch(err => res.status(409).json({ message: err.message }));

        })
        .catch(err=>res.status(404).json({ message: err.message }));

}

export const getFollowers = (req, res) => {
    const userId = req.params;
    Profile.find({ userId: userId }).select("followers")
        .then(result => res.status(200).json(result.followers))
        .catch(error => res.status(404).json({ message: error.message }));
}

export const addFollower = (req, res) => {
    const {id:userId} = req.params;
    const {followerId} = req.body;
   
    Profile.findOne({ userId: userId }).select("followers").lean()
        .then(result => {
          
            const index = result.followers.findIndex((follower) => follower === followerId)
            if (index === -1) {
                result.followers.push(followerId);
            } else {
                result.followers = result.followers.filter((follower) => follower !== followerId);
            }
            Profile.updateOne({ userId: userId }, { followers: result.followers }).lean()
                .then(updateProfile => res.status(200).json({ _id: result._id, followers: result.followers }))
                .catch(err => res.status(409).json({ message: err.message }));

        })
        .catch(err => res.status(409).json({ message: err.message }));
}

export const getFollowings = (req, res) => {
    const userId = req.params;
    Profile.find({ userId: userId }).select("followings")
        .then(result => res.status(200).json(result.following))
        .catch(error => res.status(404).json({ message: error.message }));
}

export const addFollowing = (req, res) => {
    const {id:userId} = req.params;
    const {followingId} = req.body;
    Profile.findOne({ userId: userId }).select("followings").lean()
        .then(result => {
            const index = result.followings.findIndex((following) => following === followingId)
            if (index === -1) {
                result.followings.push(followingId);
            } else {
                
                result.followings = result.followings.filter((following) => following !== followingId);
                
            }
            Profile.updateOne({ userId: userId }, { followings: result.followings }).lean()
                .then(updateProfile => {
                    console.log(result);
                    return res.status(200).json({ _id: result._id, followings: result.followings})
                })
                .catch(err => res.status(409).json({ message: err.message }));

        })
        .catch(err => res.status(409).json({ message: err.message }));
}