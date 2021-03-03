import React from 'react';
import {useSelector} from "react-redux"
import { Button } from "@material-ui/core";
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyle from "./styles/post-buttons-actions";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../store/actions/posts";
import { createNotification} from "../../store/actions/notifications";
import { likeCommentPost,deleteComment } from '../../store/actions/comments';

const ButtonsActions = ({ isPost, cardComponent,handleClick, iconSize, commentsCount }) => {
    const classes = useStyle();
    const user = useSelector((state)=>state.auth.authData);
    const dispatch = useDispatch();
    const Likes = () => {
        if (cardComponent.likes.length > 0) {
            return cardComponent.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><FavoriteIcon fontSize={iconSize} color="secondary" />&nbsp;{cardComponent.likes.length > 2 ? `You and ${cardComponent.likes.length - 1} others` : `${cardComponent.likes.length} like${cardComponent.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><FavoriteBorderIcon fontSize={iconSize} className={classes.actionIcons} />&nbsp;{cardComponent.likes.length} {cardComponent.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><FavoriteBorderIcon fontSize={iconSize} />&nbsp;Like</>;
    };

    return (

        <>
            <Button size="small" className={classes.actionIcons}
                disabled={!user?.result} onClick={() => {
                     (isPost ? dispatch(likePost(cardComponent._id)) : (dispatch(likeCommentPost(cardComponent._id))))
                      && dispatch(createNotification({notificationType:'like',userName:user?.result?.name,receiverId:cardComponent.creator,receiverName:cardComponent.name,isPost:isPost}))}}>
                <Likes />
            </Button>

            <Button size="small" className={classes.actionIcons}
                disabled={!user?.result} onClick={() => {isPost && handleClick()}}>
                <CommentOutlinedIcon /> &nbsp;&nbsp;{commentsCount} &nbsp;
            </Button>

            {(user?.result?.googleId === cardComponent?.creator || user?.result?._id === cardComponent?.creator) && (
                <Button size="small" className={classes.actionIcons} onClick={() => {isPost?dispatch(deletePost(cardComponent._id)) : dispatch(deleteComment(cardComponent._id)) }}>
                    <DeleteIcon fontSize={iconSize} />
                    Delete
                </Button>

            )}

        </>

    )
}

export default ButtonsActions;
