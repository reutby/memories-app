/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {Avatar, Card, CardActions, CardContent, CardMedia, Button, TextField, Typography } from "@material-ui/core"
import moment from "moment";
import ButtonsActions from "../../buttons-actions";
import { Comments } from "../../";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CommentInput from "./comment-input";
import { useSelector } from "react-redux"
import useStyle from "./styles/post"
const Post = ({ post, setCurrentId }) => {
    const classes = useStyle();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [toggleComments, setToggleComments] = useState(false);
    const { comments, countComments } = useSelector((state) => {
        const comments = state.comments.filter((comment) => comment.postId === String(post._id));
        return ({ comments: comments, countComments: comments.length })
    }
    );
    const handleCommentsClick = () => {
        setToggleComments((prev) => !prev);
    }

    return (

        <Card className={classes.card}>
            <CardMedia className={classes.media}
                image={post.selectedFile}
                title={post.title}
            />
            <div className={classes.overlay}>
                <Avatar className={classes.avatar}
                    alt={post.name}
                    src={post.avatar}>
                    {post.name.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="h6" className={classes.creatorName}>{post.name}</Typography>
                <Typography variant="body2">{moment(post.createAt).fromNow()}</Typography>
            </div>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (<div className={classes.overlay2}>
                <Button style={{ color: 'white' }}
                    size="small"
                    onClick={() => { setCurrentId(post._id) }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>)
            }
            <div className={classes.details}>
                <Typography variant="body2" className={classes.tags}
                >
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>

            <Typography className={classes.title}
                variant="h5"
                gutterBottom>{post.title}</Typography>

            <CardContent>
                <Typography
                    variant="body2"
                    component="p"
                >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <ButtonsActions cardComponent={post} commentsCount={countComments} handleClick={handleCommentsClick} iconSize="default" isPost />

            </CardActions>

            <CardActions>
                <Comments isShow={toggleComments} comments={comments} />
            </CardActions>
            <CardActions className={classes.commentAction}>
                <CommentInput postCreator= {{id:post.creator,name:post.name}} postId={post._id} />
            </CardActions>
        </Card>
    );
}

export default Post;