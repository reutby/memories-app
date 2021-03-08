import React, { useEffect } from 'react'
import { Container, Grow } from '@material-ui/core'
import { Posts, Profile } from "../";
import useStyle from "./styles/profile-page";
import {fetchAllProfiles} from "../../store/actions/profiles";
import {getPosts} from "../../store/actions/posts";
import { useDispatch,useSelector } from 'react-redux';
import {useLocation} from 'react-router-dom';
const ProfilePage = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.auth.authData);
    const location = useLocation().pathname;
    useEffect(() => {
        dispatch(fetchAllProfiles());
        dispatch(getPosts());
        
    }, [dispatch,location])

    return (
            <Grow in>

                <Container className={classes.mainContainer}>
                    <div className={classes.ProfileContainer}>
                        <Profile user={user} />
                    </div>
                        <Posts  userId={user?.result?.googleId || user?.result?.id}/>

                </Container>


            </Grow>
    )
}


export default ProfilePage;