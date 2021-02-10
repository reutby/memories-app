import React, { useEffect } from 'react'
import { Typography, Grid, Grow } from "@material-ui/core";
import useStyles from "./styles/notifications";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./notification";
import Pusher from 'pusher-js';
import { getNotifications } from "../../store/actions/notifications"
const Notifications = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const notifications = useSelector((state) => state.notifications.filter((notification) => notification.receiverId === user?.result?.googleId || notification.receiverId === user?.result?._id));
    const dispatch = useDispatch();
    useEffect(() => {
        const pusher = new Pusher('b9cd641863699b028250',
            {
                cluster: 'mt1',
                encrypted: true,
            });
        const channel = pusher.subscribe('notifications');
        channel.bind('inserted', () => dispatch(getNotifications()));
        return () => {
            pusher.unsubscribe('notifications');
        }
    }, [dispatch]);
    return (
        <>
            <Typography variant="h2">Count :   {notifications.length}</Typography>
            <Grow in>
                <Grid className={classes.notificationsContainer}>
                    {notifications.map((notification) => (
                        <Grid key={notification._id} className={classes.notification} item >
                            <Notification notification={notification} />
                        </Grid>
                    )
                    )}
                </Grid>
            </Grow>
        </>

    )
}

export default Notifications;
