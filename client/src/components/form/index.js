/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64"
import { TextField, Button, Container, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"
import { TagInput } from 'reactjs-tag-input';


import useStyles from "./styles/form";

import { createPost, updatePost } from "../../store/actions/posts";
const Form = ({ currentId, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const classes = useStyles();
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: [],
        selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

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
        console.log(tags);
    }

    const handelClear = () => {
        setCurrentId(null);
        setPostData({
            title: '',
            message: '',
            tags: [],
            selectedFile: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const tagsUpdate = postData.tags.map((tag)=> tag.displayValue);
        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name, tags:tagsUpdate}));
        }
        else {
            dispatch(createPost({ ...postData, name: user?.result?.name, tags:tagsUpdate}));

        }
        handelClear();

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

                {/* <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => {
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(',')
                        }
                        )
                    }} /> */}
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({
                            ...postData,
                            selectedFile: base64
                        })}
                    />
                </div>
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
                addTagOnEnterKeyPress={false}
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
                tagStyle = {`
                    background-color:#3700b3;
                    
                    box-shadow:0 .5rem 1rem #cdd0cb;
                    border-radius:2rem;
                    padding:.3rem 1rem;
                    border:solid 1px rgba(0,0,0,.8); 
                `}
                placeholder ='Add tag and hit enter...'
            />
        </Paper>
    );
}

export default Form;