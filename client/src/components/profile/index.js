import React from 'react'
import { Typography, Avatar, Button, Paper } from "@material-ui/core"
import useStyle from "./styles/profile";
import {useSelector} from "react-redux";
import {useLocation } from "react-router-dom"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const Profile = ({ user }) => {
    const postsCount = useSelector(state => state.posts.length);
    const location = useLocation().pathname;
    const isMyProfile = location.substr(1,location.length -1) === user.result?._id ||
                        location.substr(1,location.length -1) === user.result?.googleId;
    const classes = useStyle();
    return (
        <Paper className={classes.paper}>
            <Button className={classes.iconEdit}
                size="small"
                onClick={() => { }}>
                <MoreHorizIcon fontSize="default" />
            </Button>
            <div className={classes.profileDiv}>
                <Avatar className={classes.avatar}
                    alt={user?.result?.name}
                    src={user?.result?.imageUrl}>
                    {user?.result?.name.charAt(0).toUpperCase()}
                </Avatar>
                <div className={classes.profileInfo}>
                    <Typography variant="h5" className={classes.titleName}>
                        {user?.result?.name}
                    </Typography>
                    <div className={classes.infoContent}>
                        <Typography variant="body2" className={classes.postsCount}><span className={classes.highlightCount}>{postsCount}</span> posts</Typography>
                        <Typography variant="body2" className={classes.postsCount}><span className={classes.highlightCount}>{postsCount}</span> followers</Typography>
                        <Typography variant="body2" className={classes.postsCount}><span className={classes.highlightCount}>{postsCount}</span> following</Typography>
                    </div>
                    {!isMyProfile &&
                    <Button>Follow</Button>}

                </div>
            </div>




        </Paper>)

}

export default Profile;
