import * as actionTypes from "../actions/actiontypes";


const authReducer = (auth = { authData: null }, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
        case actionTypes.SIGNIN:
        case actionTypes.SIGNUP:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...auth, authData: action?.data }
        case actionTypes.LOGOUT:
            localStorage.clear();
            return { ...auth, authData: null };
        default:
            return {authData:JSON.parse(localStorage.getItem('profile'))} || auth;

    }
}
export default authReducer;