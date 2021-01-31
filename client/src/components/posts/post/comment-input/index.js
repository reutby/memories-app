/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { TextareaAutosize, Button } from "@material-ui/core";
import Picker from 'emoji-picker-react';
import useStyles from "./styles/comment-input";
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { createComment } from "../../../../store/actions/comments";
import { useDispatch } from "react-redux"
const CommentInput = ({ postId }) => {
    const classes = useStyles();
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const [toggleEmojiButton, setToggleEmojiButton] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    useEffect(() => {
        if(chosenEmoji){
            const newMessage =  message + chosenEmoji?.emoji;
            setMessage(newMessage);
        }
    }, [chosenEmoji]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user?.result) {
            const comment = {
                message: message,
                name: user.result.name,
                isGoogleLogin: (user.result?.imageUrl) ? true : false,
                avatarSrc: user.result?.imageUrl || user.result.name
            }
            dispatch(createComment(postId, comment));
            setMessage('');
        }
    }
    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.flexBox}>
                    <TextareaAutosize
                        placeholder="Add a comment..."
                        autoFocus
                        name="comment"
                        value={message}
                        type="text"
                        onChange={handleChange}
                        className={classes.commentInput}
                    />
                    <Button className={classes.emojiButton} onClick={() => setToggleEmojiButton((prev) => !prev)}>
                        <SentimentSatisfiedOutlinedIcon fontSize="default" />
                    </Button>

                </div>
                <Button type="submit" className={classes.postButton} color='primary'>
                    Post
            </Button>
            {toggleEmojiButton &&
                <div className={classes.emojiPicker}>
                    <Picker disableSkinTonePicker={true} onEmojiClick={onEmojiClick} pickerStyle={{ height: '13rem',width:'19rem' }} />

                </div>}
            </form>

        </>
    )
}

export default CommentInput;
