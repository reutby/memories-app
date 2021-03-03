/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import {useSelector} from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ChatApp from "./chat-app";
import ProtectedRoute from "./helpers/protected-route";
import { Container } from "@material-ui/core";
import * as ROUTES from "./constants/routes";
import { Navbar, Home, Auth, Notifications, ProfilePage, PostPage } from "./components";
import useStyles from "./styles";
const App = () => {
    const classes = useStyles();
    const user = useSelector((state)=>state.auth.authData);
   
    return (
        <BrowserRouter>
            <Container maxWidth='lg' className = {classes.topContainer}>
                <Navbar />
                <Switch>
                    <ProtectedRoute user={user} path={ROUTES.HOME_PAGE} exact>
                        <Home/>
                    </ProtectedRoute>
                    <Route path='/auth' component={Auth} />
                    
                    <ProtectedRoute user={user} path={ROUTES.NOTIFICATIONS_PAGE}>
                        <Notifications/>
                    </ProtectedRoute>
                    
                    <ProtectedRoute user={user} path={ROUTES.PROFILE_PAGE}>
                        <ProfilePage/>
                    </ProtectedRoute>
                    
                    <ProtectedRoute user={user} path={ROUTES.SINGLE_POST_PAGE}>
                        <PostPage/>
                    </ProtectedRoute>
                   
                   
                </Switch>

            </Container>
            <ChatApp />

        </BrowserRouter>
    )
}

export default App;