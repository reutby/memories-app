import React, { useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import useStyles from "./styles/chat-app";
import { ChatFeed } from './components';
import {useSelector, useDispatch} from 'react-redux';
import * as actionsTypes from '../store/actions/actiontypes';
import './chat-app.css';


const ChatApp = () => {
  const classes = useStyles();
  const user = useSelector(state=>state.auth.authData);
  const [isAppExit, setIsAppExit] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type:actionsTypes.AUTH_REFRESH});
    
  }, [dispatch]);
  useEffect(()=>{

  },[user]);
  return (
    <>
      <IconButton disabled={!user || user?.result?.googleId} className={classes.appButton} onClick={(e) => { setIsAppExit(false) }}>
        <ChatIcon fontSize="default" />
      </IconButton>
      {!isAppExit && user &&
        <div className={classes.chatContainer}>
          <ChatEngine className={classes.chatContainer}
            height="80vh"
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={user?.result.userName}
            userSecret={user?.result.password}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} onExit={() => setIsAppExit(true)} />}

            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
          /> </div>}

    </>


  );
};
export default ChatApp;
