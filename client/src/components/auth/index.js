import React, { useState, useEffect } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import {clearError} from "../../store/actions/error"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSuccess, signin, signup } from "../../store/actions/auth";
import { createProfile } from "../../store/actions/profiles";

import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles/auth";
import Input from "./input";
import Icon from "./icon";


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmedPassword: '',
}
const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector((state) => state.error.error);
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [uploadFile, setUploadFile] = useState(null);
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
          
    }, [error]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (isSignup) {

            const url = await dispatch(signup({ ...formData }, uploadFile, history));
            console.log(url);
            dispatch(createProfile({ name: `${formData.firstName} ${formData.lastName}`, userName: formData.userName, imageUrl: url }));
        }
        else {
            dispatch(signin(formData, history));
        }
    }

    const handleUpload = e => {
        const files = e.target.files;
        setUploadFile(files[0]);
    }
    const handleChange = e => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });


    }
    const switchMode = () => {
        setIsSignup(prevState => !prevState);
        dispatch(clearError());
    }
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch(authSuccess({ result, token }));
            dispatch(createProfile({ name: result.name, userName: result.name, imageUrl: result.imageUrl }));
            history.push('/');
        } catch (err) {
            console.log(err);

        }
    }

    const googleFailure = (err) => {
        console.log(err, 'Google sign in was unsuccessful. Try again later');

    }

    return (
        <Container component="main" maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input
                                        name="firstName"
                                        label="First Name"
                                        handleChange={handleChange}
                                        handleShowPassword={handleShowPassword}
                                        type="text"
                                        autoFocus
                                        half
                                    // value={formData.firstName}

                                    />
                                    <Input
                                        name="lastName"
                                        label="Last Name"
                                        handleChange={handleChange}
                                        handleShowPassword={handleShowPassword}
                                        type="text"
                                        autoFocus
                                        half
                                    // value={formData.lastName}

                                    />

                                </>
                            )
                        }
                        <Input
                            name="userName"
                            label="User Name"
                            handleChange={handleChange}
                            type="text"
                        // value={formData.userName}
                        />
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        // value={formData.email}
                        />
                        <Input name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            handleShowPassword={handleShowPassword}
                            // value={formData.password}
                            handleChange={handleChange}
                        />
                        {isSignup && <Input
                            name='confirmedPassword'
                            label="Repeat Password"
                            handleChange={handleChange}
                            type='password'
                        // value={formData.confirmedPassword}
                        />}
                        {isSignup &&

                            <input
                                type="file"
                                name="avatarFile"
                                placeholder="Upload avatar"
                                multiple={false}
                                id="upload-button"
                                onChange={handleUpload}
                            />
                        }
                    </Grid>
                    {error && <div className={classes.errorDiv}><Typography variant="body1" className={classes.errorMessage}>{error}</Typography></div>}
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}

                    </Button>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an acount? Sign in' : "Don't have an acount? "}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>)
}

export default Auth;