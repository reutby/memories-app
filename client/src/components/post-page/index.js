import React,{useEffect} from 'react'
import {useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"; 
import {getPosts} from "../../store/actions/posts";
import {Grid} from "@material-ui/core";
import {Post} from "../";
const PostPage = ()=> {
    const location = useLocation();
    const postId = location.pathname.split('/')[2];
  
    const post = useSelector((state)=>{
        const index =state.posts.findIndex(post=>post._id === postId);
        if(index!==-1){
            return state.posts[index];
        }
        return null;
    });
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
       
            }, [dispatch]);
    useEffect(() => {
       
    }, [post])
    return (
        <Grid item md ={8} sm={12}>
            {post&&<Post post={post} isHome={true}/>}
        </Grid>
        
    )
}

export default PostPage;
