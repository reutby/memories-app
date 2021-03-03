/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core"
import { useSelector } from "react-redux";
import Post from "./post";
import useStyles from "./styles/posts";
import { useLocation } from "react-router-dom";

const Posts = ({ setCurrentId, userId }) => {
    const classes = useStyles();
    const location = useLocation().pathname;
    const isHomePage = location === '/';
    const profiles = useSelector((state) => state.profiles);
    const posts = useSelector((state) => isHomePage ? state.posts : state.posts.filter((post) => post.creator === location.substr(1, location.length - 1)));
    const [friendsPosts, setFriendsPosts] = useState(isHomePage ? null : posts);

    useEffect(() => {
        if (isHomePage) {
            const indexUser = profiles.findIndex((profile) => profile.userId === userId);
            if (indexUser !== -1) {
                const { followings } = profiles[indexUser];
                setFriendsPosts(posts.filter((post) => followings.find((following) => post.creator === following || post.creator ===userId)));
            }
        }
    }, [posts, profiles, userId])
    return (
        !friendsPosts ? <CircularProgress /> :
            (
                <Grid className={isHomePage ? classes.posts : classes.mainContainerProfile}
                    container

                    spacing={3}>
                    {friendsPosts.map((post) => (

                        <Grid
                            key={post._id}
                            item
                            sm={12}
                            md={isHomePage ? 12 : 4}
                            className={classes.post}>
                            <Post post={post} isHome={isHomePage} setCurrentId={setCurrentId} />


                        </Grid>
                    ))}
                </Grid>
            ));
}

export default Posts;