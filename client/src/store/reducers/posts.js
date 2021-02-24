import * as actionTypes from "../actions/actiontypes";

const reducer = (posts = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL:
        case actionTypes.FETCH_USER_POSTS:
            return action.payload;
        case actionTypes.CREATE_POST:
            return [...posts, action.payload];
        case actionTypes.UPDATE_POST:
        case actionTypes.LIKE_POST:
            return (posts.map((post) => {
                if (post._id === action.payload._id) {
                    post.likes = action.payload.likes;
                }
                return post;
                
            }))
        case actionTypes.DELETE_POST:
            return posts.filter((post) => post._id !== action.payload);

        default:
            return posts;
    }
}

export default reducer;