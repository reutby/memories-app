/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import useStyles from "./styles/navbar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/auth";
import { getNotifications } from "../../store/actions/notifications";
import Pusher from "pusher-js";
import { AppBar, Typography, Toolbar, Avatar, Button, IconButton, Grow } from "@material-ui/core";
import BootstrapTooltip from '../ui-helpers/bootstrap-tool-tip';
import memories from "../../assets/images/memories.png";
import decode from 'jwt-decode';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


const Navbar = () => {

    const user = useSelector(state=>state.auth.authData);
    const totalNotifications = useSelector((state) => state.notifications.filter((notification) => notification.receiverId === user?.result?.googleId || notification.receiverId === user?.result?._id).length);
    const [newNotificationsCount, setNewNotificationsCount] = useState(totalNotifications);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const handleLogout = () => {
        dispatch(logout());
        history.push('/auth');
    }
    useEffect(() => {
        dispatch(getNotifications());
    }, [dispatch])
    useEffect(() => {
        if (newNotificationsCount < totalNotifications) {
            setNewNotificationsCount(prev => prev + 1);
        } else {
            setNewNotificationsCount(totalNotifications);
        }
    }, [totalNotifications])

    useEffect(() => {
        const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY,
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

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
        }

    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to={user? '/' : '/auth'} className={classes.heading} align="center"> Inst-Moment</Typography>
                <img src={memories} className={classes.image} alt="memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <div className={classes.notificationsDiv}>
                        <BootstrapTooltip title="Notifications">
                            <IconButton component={Link} to='/notifications' className={classes.notificationButton} onClick={() => setNewNotificationsCount(0)}>
                                <NotificationsNoneIcon className={classes.notificationIcon} fontSize="large" />
                            </IconButton>
                        </BootstrapTooltip>
                            {newNotificationsCount ? <Grow in><Typography className={classes.notificationCount}>{newNotificationsCount}</Typography></Grow> : null}
                        </div>
                        <BootstrapTooltip title="Profile">
                            <Button component ={Link} to = {`/${user.result?._id || user.result?.googleId}`} 
                           >
                                <Avatar className={classes.purple}
                                    alt={user.result.name}
                                    src={user.result.imageUrl}>
                                    {user.result.name.charAt(0).toUpperCase()}
                                </Avatar>

                            </Button>

                        </BootstrapTooltip>
                       

                        <Button variant="contained" className={classes.logout}
                            color="secondary"
                            onClick={handleLogout}>
                            Logout
                         </Button>
                    </div>
                ) : (
                        <Button component={Link} to='/auth' variant="contained" color="primary">
                            Sign In
                        </Button>
                    )}
            </Toolbar>
        </AppBar>

    )

}

export default Navbar;