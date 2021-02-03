import React, {useEffect} from 'react'
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles/notifications";
import {useDispatch, useSelector } from "react-redux";
import Notification from "./notification";
import {getNotifications} from "../../store/actions/notifications";
const Notifications = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notifications);
    useEffect(() => {
        dispatch(getNotifications());    
    }, [dispatch, notifications])

    return (
        <>
            <Typography variant= "h2">Count :   {notifications.length}</Typography>
            <Grid className={classes.notificationsContainer}>
                {notifications.map((notification) => (
                    <Grid key={notification._id} className={classes.notification} item >
                        <Notification notification={notification} />
                    </Grid>
                )
                )}
            </Grid>
        </>
    )
}

export default Notifications;
