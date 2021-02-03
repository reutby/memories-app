/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Avatar, Card, CardActions, CardContent } from '@material-ui/core';
import ButtonsActions from "../../buttons-actions";
import useStyles from "./styles/comment";
import moment from "moment";

const Comment = ({ comment }) => {

    const classes = useStyles();
    // const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <Card className={classes.commentCard}>
            <div className={classes.profile}>
                <Avatar className={classes.purple}
                    alt={comment.name}
                    src={comment.avatarSrc}>
                    {comment.name.charAt(0).toUpperCase()}
                </Avatar>
                <Typography className={classes.userName}
                    variant="h6"
                >
                    {comment.name + ':'}
                </Typography>
                <Typography variant="body2" className= {classes.time}>{moment(comment.createAt).fromNow()}</Typography>

            </div>
            <Typography className={classes.comment} variant="body2">{comment.message}</Typography>


            <CardActions>
                <ButtonsActions iconSize='small' isPost={false} cardComponent={comment} />
            </CardActions>
        </Card>
    );
}

export default Comment;
