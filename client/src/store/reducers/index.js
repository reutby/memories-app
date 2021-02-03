import {combineReducers} from "redux";

import posts from "./posts";
import auth from "./auth";
import comments from "./comments";
import notifications from "./notifications";
export default combineReducers({
    posts:posts,
    auth:auth,
    comments:comments,
    notifications:notifications,
})