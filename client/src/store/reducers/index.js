import {combineReducers} from "redux";

import posts from "./posts";
import auth from "./auth";
import comments from "./comments";
import notifications from "./notifications";
import profiles from "./profiles";
import error from "./error";
export default combineReducers({
    posts:posts,
    auth:auth,
    comments:comments,
    notifications:notifications,
    profiles:profiles,
    error:error,
})