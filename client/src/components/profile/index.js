import React, { useState, useEffect } from 'react'
import { Typography, Avatar, Button, Paper, CircularProgress } from "@material-ui/core"
import useStyle from "./styles/profile";
import { useSelector, useDispatch } from "react-redux";
import {ProfileInfo} from "../";
import { useLocation } from "react-router-dom";
import { addFollower, addFollowing } from "../../store/actions/profiles";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const Profile = ({ user }) => {

    const location = useLocation().pathname;
    const profiles = useSelector(state => state.profiles);
    const countPosts = useSelector(state => state.posts.filter((post) => post.creator === location.substr(1, location.length - 1))).length;
    const [currentProfile, setCurrentProfile] = useState(null);
    const [userOnlineProfile, setUserOnlineProfile] = useState(null);
    const [followersListProfile, setFollowersListProfile] = useState(null);
    const [followingsListProfile, setFollowingsListProfile] = useState(null);

    const dispatch = useDispatch();

    const isMyProfile = location.substr(1, location.length - 1) === user.result?._id ||
        location.substr(1, location.length - 1) === user.result?.googleId;

    const classes = useStyle();
    useEffect(() => {
        
        if(currentProfile && profiles){
            const filteredProfiles = [];
            currentProfile.followers.map(followerId => {
                const index = profiles.findIndex((profile) => profile.userId === followerId);
                filteredProfiles.push(profiles[index]);
                return followerId;
            })
            setFollowingsListProfile(filteredProfiles);

        }
    },[profiles,currentProfile]);

    useEffect(() => {
       
        if(currentProfile && profiles){
            const filteredProfiles = [];
            currentProfile.followings.map(followingId => {
                const index = profiles.findIndex((profile) => profile.userId === followingId);
                filteredProfiles.push(profiles[index]);
                return followingId;
            })
            setFollowersListProfile(filteredProfiles);

        }
    },[profiles,currentProfile]);

    useEffect(() => {

        const currProfileId = location.substr(1, location.length - 1);
        let profileIndex = profiles.findIndex((element) => element.userId === currProfileId);
        if (profileIndex !== -1) {
            if (isMyProfile) {
                //set only the user profile
                setUserOnlineProfile(profiles[profileIndex]);
                setCurrentProfile(profiles[profileIndex]);
            }
            //should be always valid
            else {
                //set both user profile and current profile
                setCurrentProfile(profiles[profileIndex]);
                profileIndex = profiles.findIndex((element) => element.userId === user?.result?._id || element.userId === user?.result?.googleId);
                if (profileIndex !== -1) {
                    setUserOnlineProfile(profiles[profileIndex]);
                }
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profiles]);

    const followerHandler = () => {
        dispatch(addFollowing(userOnlineProfile.userId, { followingId: currentProfile.userId }));
        dispatch(addFollower(currentProfile.userId, { followerId: userOnlineProfile.userId }));

    }
    return (
        <Paper className={classes.paper}>
            {(isMyProfile && userOnlineProfile) || currentProfile ?
                <>
                    {isMyProfile &&
                        <Button className={classes.iconEdit}
                            size="small"
                            onClick={() => { }}>
                            <MoreHorizIcon fontSize="default" />
                        </Button>
                    }
                    <div className={classes.profileDiv}>
                        <Avatar className={classes.avatar}
                            alt={isMyProfile ? userOnlineProfile.name : currentProfile.name}
                            src={isMyProfile ? userOnlineProfile.imageUrl : currentProfile.imageUrl}>
                            {user?.result?.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <div className={classes.profileInfo}>
                            <Typography variant="h5" className={classes.titleName}>
                                {isMyProfile ? userOnlineProfile.name : currentProfile.name}
                            </Typography>
                            {followersListProfile && followingsListProfile && 
                            <ProfileInfo currentProfile={currentProfile} followers={followersListProfile} followings={followingsListProfile} postsCount = {countPosts} isMyProfile={isMyProfile}/>}
                            {!isMyProfile &&
                                <Button onClick={followerHandler} className={classes.followButton} variant="contained" color="primary" >{userOnlineProfile.followings.find((followingId) => followingId === currentProfile.userId) ? 'Un-Follow' : 'Follow'}</Button>}
                        </div>
                    </div>

                </> : <CircularProgress />
            }</Paper>

    )

}

export default Profile;
