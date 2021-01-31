import React,{useState} from 'react'
import { TextareaAutosize, Button } from "@material-ui/core";
import useStyles from "./styles/comment-input";
import {createComment} from "../../../../store/actions/comments";
import {useDispatch} from "react-redux"
const CommentInput = ({postId}) => {
    const classes = useStyles();
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(user?.result){
            const comment ={
              message:message,
              name:user.result.name,
              isGoogleLogin:(user.result?.imageUrl)?true : false,
              avatarSrc:user.result?.imageUrl ||user.result.name
            }
            dispatch(createComment(postId,comment));
            setMessage('');
        }
    }
    const handleChange = (e)=>{
        setMessage(e.target.value);
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextareaAutosize
                placeholder="Add a comment..."
                autoFocus
                name= "comment"
                value ={message} 
                type="text"
                onChange={handleChange}
                className={classes.commentInput}
            />
            <Button type="submit" className={classes.postButton} color='primary'>
                Post
            </Button>
        </form>
    )
}

export default CommentInput;
