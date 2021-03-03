/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"
import { TagInput } from 'reactjs-tag-input';
import { uploadImage } from '../../api/upload-image'

import useStyles from "./styles/form";

import { createPost, updatePost } from "../../store/actions/posts";
const Form = ({ currentId, setCurrentId }) => {
    const user = useSelector((state)=>state.auth.authData);
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [uploadFile, setUploadFile] = useState(null);
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: [],
        imageUrl: ''
    });

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post]);


    const handleTagsChange = (tags) => {
        setPostData({
            ...postData,
            tags: tags
        });
    }

    const handelClear = () => {
        setCurrentId(null);
        setPostData({
            title: '',
            message: '',
            tags: [],
            imageUrl:''
        })
    }
    const handleUpload = e => {
        const files = e.target.files;
       
        setUploadFile(files[0]);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const tagsUpdate = postData.tags.map((tag) => tag.displayValue);
       
        const url = await uploadImage(uploadFile);
        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name, tags: tagsUpdate, imageUrl:url }));
        }
        else {
            dispatch(createPost({
                ...postData, name: user?.result?.name, tags: tagsUpdate, isGoogleLogin: (user.result?.imageUrl) ? true : false,
                avatarSrc: user.result?.imageUrl || null, imageUrl: url
            }));

        }
        handelClear();
        setUploadFile(null);

    }
    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign in to create your own memories and like other's memories.
                </Typography>

            </Paper>)
    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>


                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    className={classes.title}
                    onChange={(e) => {
                        setPostData({
                            ...postData,
                            title: e.target.value
                        }
                        )
                    }} />

                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    className={classes.message}
                    value={postData.message}
                    onChange={(e) => {
                        setPostData({
                            ...postData,
                            message: e.target.value
                        }
                        )
                    }} />

                <input
                    type="file"
                    name="imageFile"
                    placeholder="Upload Image"
                    multiple={false}
                    required
                    id="upload-button"
                    onChange={handleUpload}
                />

                <Button className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth>Submit</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={handelClear}
                    fullWidth>Clear</Button>
            </form>

            <TagInput
                onTagsChanged={handleTagsChange}
                tags={postData.tags}
                wrapperStyle={`
                        
                        border:solid 1px #cdd0cb;
                        border-radius:5px;
                        width:77%;
                        top:45%;
                        overflow-y:scroll;
                        overflow-x:hidden;
                        max-height:4rem;
                        left:1.4rem;
                        transform:none;
                        box-shadow:none;
                        background-color:transparent;
                        margin-bottom:1rem;
                        margin-top:.6rem;
                        padding:1rem;
                        `}
                inputStyle={
                    `background-color:transparent;
                        `
                }
                tagStyle={`
                    background-color:#3700b3;
                    
                    box-shadow:0 .5rem 1rem #cdd0cb;
                    border-radius:2rem;
                    padding:.3rem 1rem;
                    border:solid 1px rgba(0,0,0,.8); 
                `}
                placeholder='Add tag and hit enter...'
            />
        </Paper>
    );
}

export default Form;