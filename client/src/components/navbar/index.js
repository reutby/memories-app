/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState,useEffect} from "react"
import useStyles from "./styles/navbar";
import { Link, useHistory, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/actions/auth"; 
import {getNotifications} from "../../store/actions/notifications";
import { AppBar, Typography, Toolbar, Avatar, Button,IconButton } from "@material-ui/core";
import memories from "../../assets/images/memories.png";
import decode from 'jwt-decode';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const totalNotifications = useSelector((state)=> state.notifications.filter((notification)=> notification.receiverId ===user?.result?.googleId || notification.receiverId === user?.result?._id ).length);
    const [newNotificationsCount,setNewNotificationsCount] =useState(totalNotifications);
    const [newNotificationsCountDiff,setNewNotificationsCountDiff] = useState(totalNotifications);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history =useHistory();
    const location =useLocation();
    const handleLogout = ()=>{
        dispatch(logout());
        history.push('/auth');
        setUser(null);
    }
    useEffect(() => {
        dispatch(getNotifications());
        console.log("navbar useeffect getNotifications");
    }, [dispatch])

    useEffect(()=>{
        console.log('navbar totalNotifications change');
       setNewNotificationsCount(totalNotifications);
    },[totalNotifications])

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading}  align="center"> Memo Zone</Typography>
                <img src={memories} className={classes.image} alt="memories" height="60" />
            </div>
            <Toolbar className = {classes.toolbar}>
                {user? (
                    <div className = {classes.profile}>
                        <div className={classes.notificationsDiv}>
                         
                         <IconButton component={Link} to='/notifications' className={classes.notificationButton} onClick={()=>setNewNotificationsCount(0)}>
                             <NotificationsNoneIcon className={classes.notificationIcon} fontSize="large"/>
                         </IconButton>
                        
                        <Typography className={classes.notificationCount}>{newNotificationsCount}</Typography>
                        </div>
                        <Avatar className = {classes.purple}
                        alt = {user.result.name}
                        src={user.result.imageUrl}>
                            {user.result.name.charAt(0).toUpperCase()}
                         </Avatar>
                         <Typography className={classes.userName} 
                         variant="h6"
                         >
                          {user.result.name}  
                         </Typography>

                         <Button variant="contained" className={classes.logout}
                         color="secondary"
                         onClick={handleLogout}>
                            Logout
                         </Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant = "contained" color="primary">
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>

    )

}

export default Navbar;