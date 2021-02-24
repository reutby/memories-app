import * as actionTypes from "../actions/actiontypes";

const reducer = (profiles = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_PROFILES:
            return action.payload;
        case actionTypes.CREATE_PROFILE:
            return [...profiles,action.payload];
        case actionTypes.ADD_FOLLOWER_TO_PROFILE:
            return (profiles.map((profile) => {
                if (profile._id === action.payload._id) {
                    profile.followers = action.payload.followers;
                }
                return profile;     
            }))
        case actionTypes.ADD_FOLLOWING_TO_PROFILE:
            return (profiles.map((profile) => {
                if (profile._id === action.payload._id) {
                    profile.followings = action.payload.followings;
                }
                return profile;     
            }))
        case actionTypes.EDIT_PROFILE://edit profile image
        default:
            return profiles;
    }
}

export default reducer;