/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import { Grid, CircularProgress } from "@material-ui/core"
import {useSelector} from "react-redux";
import Post from "./post";
import useStyles from "./styles/posts";
import {useLocation} from "react-router-dom";

const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const location = useLocation().pathname;
    const isHomePage = location ==='/';
    const posts = useSelector((state) => isHomePage? state.posts : state.posts.filter((post)=>post.creator ===location.substr(1,location.length-1)));
    useEffect(() => {
        
    }, [posts])
    return (
        !posts ? <CircularProgress /> :
            (
                <Grid className={isHomePage?classes.posts : classes.mainContainerProfile}
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