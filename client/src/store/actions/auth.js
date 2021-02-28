import * as actionTypes from "./actiontypes";
import * as api from "../../api";
import {uploadImage} from "../../api/upload-image";

import {addNewUser} from "../../api/chat";
export const authSuccess = (data) =>
    ({
        type: actionTypes.AUTH_SUCCESS,
        data: data
    });

export const logout = () => ({ type: actionTypes.LOGOUT });

export const signin = (formData,history)=>async(dispatch)=>{
    try {
        const {data} = await api.signIn(formData)
        //login the user
        dispatch({type: actionTypes.SIGNIN, data:data});
        history.push('/');

    } catch (error) {
        console.log(error);
    }
}
 
export const signup = (formData,uploadFile,history)=>async(dispatch)=>{
    try {
        const url = await uploadImage(uploadFile);
        const {data} = await api.signUp({...formData,imageUrl:url});
        //login the user
        addNewUser(data);
        dispatch({type: actionTypes.SIGNUP, data:data});
        
        history.push('/');
        return url;
    } catch (error) {
        console.log(error);
        return null;
    }

}
 
