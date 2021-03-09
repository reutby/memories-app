import React from 'react';
import { Avatar, Typography, Button } from "@material-ui/core";
import useStyles from "./styles/search-result-item";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFollower, addFollowing } from "../../../store/actions/profiles";
const SearchResultItem = ({ isMyProfile, profileItem, userProfile }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const addFollowingHandler = () => {
        dispatch(addFollowing(userProfile.userId, { followingId: profileItem.userId }));
        dispatch(addFollower(profileItem.userId, { followerId: userProfile.userId }));
    }
    return (
        <div className={classes.itemContainer}>
            <Button component={Link} to={`/${profileItem.userId}`} >
                <Avatar alt={profileItem.name}
                    src={profileItem.imageUrl}>
                    {profileItem.name.charAt(0).toUpperCase()}
                </Avatar>

            </Button>
            <Typography variant="body1" className={classes.profileName} >{profileItem.name}</Typography>
            {isMyProfile && <Button size="small" variant="contained" color="primary" onClick={addFollowingHandler}> {userProfile?.followings.find(following => following === profileItem.userId) ? "Unfollow" : "Follow"}</Button>}
        </div>
    )
}

export default SearchResultItem;
