import * as api from "../../api";
import * as actionTypes from "./actiontypes";
// Action Creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        dispatch({ type: actionTypes.FETCH_ALL, payload: data });

    } catch (err) {
        console.log(err);
    }
}

//for now i;m not using this action
// export const getUserPosts = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.fetchUserPosts(id);
//         dispatch({ type: actionTypes.FETCH_USER_POSTS, payload: data });

//     } catch (err) {
//         console.log(err);
//     }
// }
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: actionTypes.CREATE_POST, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {

        const { data } = await api.updatePost(id, post);
        dispatch({ type: actionTypes.UPDATE_POST, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deletePost = (id)=>async(dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type:actionTypes.DELETE_POST, payload:id})
    }catch(err){
        console.log(err);
    }
}

export const likePost = (id)=>async(dispatch)=>{
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: actionTypes.LIKE_POST, payload: data });
    } catch (err) {
        console.log(err);
    }
}