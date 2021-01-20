/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./assets/images/memories.png";
import { Posts, Form } from "./components";
import useStyles from "./styles";
import {getPosts} from "./store/actions/posts";
import {useDispatch} from "react-redux";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch, currentId])
    return (
        <Container maxWidth="lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> Memories</Typography>
                <img src={memories} className={classes.image} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className = {classes.mainContainer} justify="space-between"  alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId = {currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>

                </Container>
            </Grow>
        </Container>
    )
}

export default App;