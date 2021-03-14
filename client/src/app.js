/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ChatApp from "./chat-app";
import ProtectedRoute from "./helpers/protected-route";
import { Container, FormControlLabel } from "@material-ui/core";
import { Switch as UIswitch } from "@material-ui/core";
import * as ROUTES from "./constants/routes";
import { Navbar, Home, Auth, Notifications, ProfilePage, PostPage } from "./components";
import useStyles from "./styles";
const App = () => {

    const classes = useStyles();
    const user = useSelector((state) => state.auth.authData);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [theme, setTheme] = useState({
        palette: {
            type: "dark"
        },
    });
    const ToggleDarkTheme = () => {
        let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        setIsDarkMode((prev => !prev));
        setTheme(
            {
                palette: {
                    type: newPaletteType
                }
            }
        );
    }
    const muiTheme = createMuiTheme(theme);

    return (
        <>
            <BrowserRouter>
                <MuiThemeProvider theme={muiTheme}>
                    <CssBaseline />
                        <Navbar />
                        <Container maxWidth='lg' className={classes.topContainer}>
                            <FormControlLabel classes={{ label: classes.label }} labelPlacement="bottom" className={classes.darkModeSwitch}
                                control={<UIswitch size="medium" checked={isDarkMode} onChange={ToggleDarkTheme} name="darkMode" />}
                                label="DarkMode"
                            />
                        <Switch>
                            <ProtectedRoute user={user} path={ROUTES.HOME_PAGE} exact>
                                <Home />
                            </ProtectedRoute>

                            <Route path={ROUTES.LOGIN_PAGE} component={Auth} />

                            <ProtectedRoute user={user} path={ROUTES.NOTIFICATIONS_PAGE}>
                                <Notifications />
                            </ProtectedRoute>

                            <ProtectedRoute user={user} exact path={ROUTES.SINGLE_POST_PAGE}>
                                <PostPage />
                            </ProtectedRoute>

                            <ProtectedRoute user={user} path={ROUTES.PROFILE_PAGE}>
                                <ProfilePage />
                            </ProtectedRoute>


                        </Switch>

                    </Container>
                    <ChatApp />
                </MuiThemeProvider>
            </BrowserRouter>
        </>
    )
}

export default App;