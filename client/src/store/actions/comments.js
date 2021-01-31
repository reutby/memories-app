import * as api from "../../api";
import * as actionTypes from "./actiontypes";
// Action Creators

export const getAllComments = () => async (dispatch) => {
    try {
        const { data } = await api.fetchComments();

        dispatch({ type: actionTypes.FETCH_ALL_COMMENTS, payload: data });

    } catch (err) {
        console.log(err);
    }
}

export const createComment = (postId,comment) => async (dispatch) => {
    try {
        const { data } = await api.createPostComment(comment,postId);
        dispatch({ type: actionTypes.CREATE_POST_COMMENT, payload: data });
    } catch (err) {
        console.log(err);
    }
}

// export const updatePost = (id, post) => async (dispatch) => {
//     try {

//         const { data } = await api.updatePost(id, post);
//         dispatch({ type: actionTypes.UPDATE_POST, payload: data });
//     } catch (err) {
//         console.log(err);
//     }
// }

export const deleteComment = (id)=>async(dispatch)=>{
    try{
        await api.deletePostComment(id);
        dispatch({type:actionTypes.DELETE_POST_COMMENT, payload:id})
    }catch(err){
        console.log(err);
    }
}

export const likeCommentPost = (id)=>async(dispatch)=>{
    try {
        const { data } = await api.likePostComment(id);
        dispatch({ type: actionTypes.LIKE_POST_COMMENT, payload: data });
    } catch (err) {
        console.log(err);
    }
}