import React from 'react'
import { Link } from "react-router-dom";
import moment from "moment";

import useStyles from "./styles/notification";
import {useDispatch} from 'react-redux';
import { Typography, Button} from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteNotification} from "../../../store/actions/notifications";
const Notification = ({ notification }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    return (
      <>
            <Typography className={classes.message}><strong>{notification.userName}</strong> {(notification.notificationType === 'like') ?
                `Likes your ${notification.isPost ? 'Post' : 'Comment'}`
                : `Comment on your ${notification.isPost ? 'Post' : 'Comment'}`}</Typography>
            <Button size="small" className={classes.deleteIcons} onClick={() => { dispatch(deleteNotification(notification._id))}}>
                <DeleteIcon fontSize='default' />
            </Button>
            <Typography component={Link} color="primary" to='/' variant='body1' className={classes.link} align="center"> Go to Post</Typography>
            <Typography className={classes.moment} variant="body2">{moment(notification.createAt).fromNow()}</Typography> 

      </>
    )
}

export default Notification;
