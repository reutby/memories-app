/* eslint-disable no-unused-vars */
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Container } from "@material-ui/core";
import { Navbar, Home, Auth } from "./components";
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
                </Switch>

            </Container>

        </BrowserRouter>
    )
}

export default App;