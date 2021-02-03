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
        console.log(data);
        dispatch({ type: actionTypes.CREATE_NOTIFICATION, payload: data });
    } catch (err) {
        console.log(err);
    }
}
