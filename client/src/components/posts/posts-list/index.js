import React from 'react';
import { Grid } from "@material-ui/core";
import useStyles from "./styles/posts-list";
import Post from "../post";
const PostsList = ({ posts , isHomePage, setCurrentId }) => {

    const classes = useStyles();

    return (
        posts && <Grid className={isHomePage ? classes.posts : classes.mainContainerProfile}
            container

            spacing={3}>
           

            {posts.map((post) => (

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
    )
}

export default PostsList;