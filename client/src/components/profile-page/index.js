import React, { useEffect } from 'react'
import { Container, Grow } from '@material-ui/core'
import { Posts, Profile } from "../";
import useStyle from "./styles/profile-page";
import { getUserPosts } from "../../store/actions/posts";
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
const ProfilePage = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const location = useLocation().pathname;
    useEffect(() => {

        dispatch(getUserPosts(location.substr(1,location.length)));

    }, [dispatch])
    return (
            <Grow in>

                <Container className={classes.mainContainer}>
                    <div item className={classes.ProfileContainer}>
                        <Profile user={user} />
                    </div>
                    <Posts />

                </Container>


            </Grow>
    )
}


export default ProfilePage;