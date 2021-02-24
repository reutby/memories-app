/* eslint-disable no-unused-vars */
import React from "react";
import { Grid, CircularProgress } from "@material-ui/core"
import {useSelector} from "react-redux";
import Post from "./post";
import useStyles from "./styles/posts";
import {useLocation} from "react-router-dom";

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const location = useLocation();
    const isHomePage = location.pathname ==='/';
    
    return (
        !posts ? <CircularProgress /> :
            (
                <Grid 
                    container
                    
                    spacing={3}>
                    {posts.map((post) => (
                        <Grid
                            key={post._id}
                            item
                            sm={12}
                            md={isHomePage?12:4}
                             
                            className={classes.post}>
                            <Post post ={post} isHome={isHomePage} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                </Grid>
            ));
}

export default Posts;