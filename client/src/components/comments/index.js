import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles/comments';
import Comment from "./comment";
const Comments = ({ isShow, comments }) => {

    const classes = useStyles();
    return (
        !comments? <CircularProgress /> : (isShow && comments.length) ? (
            <Grid className={classes.container}
                container
                alignItems="stretch"
                spacing={0}>

                {comments.map((comment) => (
                    <Grid
                        key={comment._id}
                        item
                        xs={12}
                        sm={12} >

                        <Comment comment={comment} />
                    </Grid>
                ))}
            </Grid> 
        ) : null
    )
}

export default Comments;
