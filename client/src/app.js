/* eslint-disable no-unused-vars */
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ChatApp from "./chat-app";
import { Container } from "@material-ui/core";
import { Navbar, Home, Auth, Notifications, ProfilePage, PostPage } from "./components";
import useStyles from "./styles";
const App = () => {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/auth' component={Auth} />
                    <Route path='/notifications' component={Notifications} />
                    <Route path='/:userId' component={ProfilePage}/>
                    <Route path ='/posts/:id' component={PostPage}/>
                </Switch>

            </Container>
            <ChatApp />

        </BrowserRouter>
    )
}

export default App;