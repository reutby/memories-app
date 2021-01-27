/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import moment from "moment"

import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../store/actions/posts";
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyle from "./styles/post"
const Post = ({ post, setCurrentId }) => {
    const classes = useStyle();
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><FavoriteIcon fontSize="medium" color="secondary" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><FavoriteBorderIcon fontSize="medium" className={classes.actionIcons} />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><FavoriteBorderIcon fontSize="medium" />&nbsp;Like</>;
    };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media}
                image={post.selectedFile}
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
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
                <Typography variant="body2"
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
                
                <Button size="small" className={classes.actionIcons}
                    disabled={!user?.result} onClick={() => { dispatch(likePost(post._id)) }}>
                    <Likes />
                </Button>
                <Button size="small" className={classes.actionIcons}
                    disabled={!user?.result} onClick={() => { }}>
                    <CommentOutlinedIcon />
                </Button>

                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" className={classes.actionIcons} onClick={() => { dispatch(deletePost(post._id)) }}>
                        <DeleteIcon fontSize="medium" />
                    Delete
                    </Button>

                )}

            </CardActions>
        </Card>
    );
}

export default Post;