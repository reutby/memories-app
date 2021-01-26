import React,{useState , useEffect} from "react";
import {Container, Grid, Grow} from '@material-ui/core'
import { useDispatch } from "react-redux";

import useStyle from "./styles/home";

import { getPosts } from "../../store/actions/posts";
import {Posts, Form} from "../"

const Home = ()=>{

    const classes = useStyle();
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId])

    return (
        <Grow in>
        <Container>
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7} >
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>

        </Container>
    </Grow>
    )
}

export default Home;