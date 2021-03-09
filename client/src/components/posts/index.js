/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import PostsList from "./posts-list";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Posts = ({ setCurrentId, userId }) => {

    const location = useLocation().pathname;
    const isHomePage = location === '/';
    const profiles = useSelector((state) => state.profiles);
    const posts = useSelector((state) => isHomePage ? state.posts : state.posts.filter((post) => post.creator === location.substr(1, location.length - 1)));
    const [friendsPosts, setFriendsPosts] = useState(null);

    useEffect(() => {

        if (isHomePage) {
            const indexUser = profiles.findIndex((profile) => profile.userId === userId);
 
            if (indexUser !== -1) {
                const { followings } = profiles[indexUser];
                setFriendsPosts(posts.filter((post) => followings.find((following) => 
                    post.creator === following) || post.creator === userId
                    ));
              
            }
        }
    }, [posts, profiles])

    return (
        !posts ? <CircularProgress /> : (<PostsList
            posts={isHomePage ? friendsPosts : posts}
            isHomePage={isHomePage}
            setCurrentId={setCurrentId} />));
}

export default Posts;