/* eslint-disable no-unused-vars */
import React from "react";
import { Grid, CircularProgress } from "@material-ui/core"
import {useSelector} from "react-redux";
import Post from "./post";
import useStyles from "./styles/posts";
const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> :
            (
                <Grid className={classes.container}
                    container
                    alignItems="stretch"
                    spacing={3}>
                    {posts.map((post) => (
                        <Grid
                            key={post._id}
                            item
                            xs={12}
                            sm={12} 
                            className={classes.post}>
                            <Post post ={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                </Grid>
            ));
}

export default Posts;