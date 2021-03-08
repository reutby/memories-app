import React, { useState, useEffect } from "react";
import { Container, Grid, Grow } from '@material-ui/core'
import { useDispatch, useSelector } from "react-redux";
import useStyle from "./styles/home";
import { getAllComments } from "../../store/actions/comments";
import { getPosts } from "../../store/actions/posts";
import { fetchAllProfiles } from "../../store/actions/profiles";
import { Posts, Form, SearchBar } from "../"

const Home = () => {

    const classes = useStyle();
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.authData);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);

    useEffect(() => {
        dispatch(fetchAllProfiles());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch, currentId]);

    return (

        <Grow in>

            <Container className={classes.topContainer}>
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid sm={12} item className={classes.searchBarContainer}>
                        <SearchBar user={user} />
                    </Grid>
                </Grid >
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item className={classes.postsItem} xs={12} sm={8}>
                        <Posts userId={user?.result?.googleId || user?.result?._id} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>

                </Grid>

            </Container>
        </Grow>
    )
}

export default Home;