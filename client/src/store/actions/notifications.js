import * as api from "../../api";
import * as actionTypes from "./actiontypes";


export const getNotifications = () => async (dispatch) => {
    try {
        const { data } = await api.fetchNotifications();

        dispatch({ type: actionTypes.FETCH_NOTIFICATIONS, payload: data });

    } catch (err) {
        console.log(err);
    }
}

export const createNotification = (notification) => async (dispatch) => {
    try {
        const { data } = await api.createNotification(notification);
        console.log(data, "createNotification action");
        dispatch({ type: actionTypes.CREATE_NOTIFICATION, payload: data });
    } catch (err) {
        console.log(err);
    }
}


export const deleteNotification = (notificationId)=>async(dispatch)=>{
    try{
        await api.deleteNotification(notificationId);
        dispatch({type:actionTypes.DELETE_NOTIFICATION,payload:notificationId});
    }
    catch(err){
        console.log(err);
    }
}