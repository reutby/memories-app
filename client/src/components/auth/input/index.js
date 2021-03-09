import React from 'react';
import useStyles from "./styles/input";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
export default function Input({ half, type, value, name, label, autoFocus, handleShowPassword, handleChange }) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                className={classes.TextField}
                name={name}
                variant="outlined"
                onChange={handleChange}
                required
                fullWidth
                autoComplete="off"
                value={value}
                label={label}
                autoFocus={autoFocus}
                type={type}
              

                InputProps={name === 'password' ? {
                    
                    endAdornment:
                        (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {type === 'password' ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                } : null}
            />


        </Grid>
    )
}
