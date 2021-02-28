import * as api from "../../api";
import * as actionTypes from "./actiontypes";
// Action Creators

export const fetchAllProfiles = () => async (dispatch) => {
    try{
        const {data} = await api.fetchAllProfiles();
        dispatch({type:actionTypes.FETCH_ALL_PROFILES,payload:data});

    }catch(err){
        console.log(err);
    }
}

export const createProfile = (newProfile) =>async(dispatch) =>{
    try{
        const {data} = await api.createProfile(newProfile);
        dispatch({type:actionTypes.CREATE_PROFILE,payload:data});
    }catch(err){
        console.log(err);
    }
}

export const addFollower = (beenFollowId,followerId) =>async(dispatch)=>{
    try{
        const {data} = await api.addFollower(beenFollowId,followerId);
       
        dispatch({type:actionTypes.ADD_FOLLOWER_TO_PROFILE, payload:data});
    }catch(err){
        console.log(err);
    }
}

export const addFollowing = (followerId,beenFollowId) =>async(dispatch)=>{
    try{
        const {data} = await api.addFollowing(followerId,beenFollowId);
       
        dispatch({type:actionTypes.ADD_FOLLOWING_TO_PROFILE, payload:data});
    }catch(err){
        console.log(err);
    }
}
