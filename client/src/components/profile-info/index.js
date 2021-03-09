import React, { useState } from 'react';
import { Typography, Button, Paper } from "@material-ui/core";
import { SearchResultList } from "../";
import useStyles from "./styles/profile-info";
const ProfileInfo = ({ followers, followings, postsCount, isMyProfile, currentProfile }) => {
    const classes = useStyles();
    const [isFollowersListOpen, setIsFollowersListOpen] = useState(false);
    const [isFollowingsListOpen, setIsFollowingsListOpen] = useState(false);

    return (
        <div className={classes.infoContent}>
            <Typography variant="body2" className={classes.postsCount}><span className={classes.highlightCount}>{postsCount}</span> posts</Typography>
            <div className={classes.followDiv}>
                <Button onClick={() => setIsFollowersListOpen((prev) => !prev)} className={classes.followCount}><span className={classes.highlightCount}>{followers.length}</span> followers</Button>
                {isFollowersListOpen &&
                    <Paper className={classes.followersList}>
                        <SearchResultList isMyProfile={false} userProfile={currentProfile} filteredProfiles={followers} />
                    </Paper>}

            </div>
            <div className={classes.followDiv}>
                <Button onClick={() => setIsFollowingsListOpen((prev) => !prev)} className={classes.followCount}><span className={classes.highlightCount}>{followings.length}</span> following</Button>

                {isFollowingsListOpen &&
                    <Paper className={classes.followersList}>
                        <SearchResultList isMyProfile={isMyProfile} userProfile={currentProfile} filteredProfiles={followings} />
                    </Paper>
                }

            </div>
        </div>
    )
}

export default ProfileInfo; 
