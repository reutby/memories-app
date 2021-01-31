import * as actionTypes from "../actions/actiontypes";

const reducer = (comments = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_COMMENTS:
            return action.payload;
        case actionTypes.CREATE_POST_COMMENT:
            return [...comments, action.payload];
        case actionTypes.LIKE_POST_COMMENT:
            return (comments.map((comment) => {
                if (comment._id === action.payload._id) {
                    comment.likes = action.payload.likes;
                }
                return comment;
                
            }))
        case actionTypes.DELETE_POST_COMMENT:
            return comments.filter((comment) => comment._id !== action.payload);

        default:
            return comments;
    }
}

export default reducer;