import * as actionTypes from "../actions/actiontypes";


const notificationsReducer = (notifications = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_NOTIFICATIONS:
            return action.payload;
        case actionTypes.CREATE_NOTIFICATION:{
            return [...notifications, action.payload];
        }
        case actionTypes.DELETE_NOTIFICATION:
            return notifications.filter((notification)=>notification._id!==action.payload);
        default:
            return notifications;

    }
}
export default notificationsReducer;