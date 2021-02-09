import React, { useEffect } from 'react'
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles/notifications";
import {useSelector} from "react-redux";
import Notification from "./notification";

const Notifications = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const notifications = useSelector((state) => state.notifications.filter((notification)=> notification.receiverId ===user?.result?.googleId || notification.receiverId === user?.result?._id ));
    useEffect(()=>{
        console.log('notifications use effect active');
    },[notifications]);
    return (
        <>
            <Typography variant="h2">Count :   {notifications.length}</Typography>
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
