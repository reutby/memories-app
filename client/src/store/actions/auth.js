import * as actionTypes from "./actiontypes";
import * as api from "../../api";
import { setError } from "./error";
import { uploadImage } from "../../api/upload-image";

import { addNewUser } from "../../api/chat";
export const authSuccess = (data) =>
({
    type: actionTypes.AUTH_SUCCESS,
    data: data
});

export const logout = () => ({ type: actionTypes.LOGOUT });

export const signin = (formData, history) => async (dispatch) => {
    try {
        const res = await api.signIn(formData);
        const { data } = res;

        //login the user
        dispatch({ type: actionTypes.SIGNIN, data: data });
        history.push('/');

    } catch (error) {

        const { data } = error.response;
        dispatch(setError(data.message));
    }
}

export const signup = (formData, uploadFile, history) => async (dispatch) => {
    try {
        const url = await uploadImage(uploadFile);
        const { data } = await api.signUp({ ...formData, imageUrl: url });
        //login the user
        addNewUser(data);
        dispatch({ type: actionTypes.SIGNUP, data: data });

        history.push('/');
        return url;
    } catch (error) {
        const { data } = error.response;
        dispatch(setError(data.message));
        return null;
    }

}

