import * as actionTypes from  "../actions/actiontypes";


const errorReducer = (state = {error:null}, action) =>{
    const { error } = action;

    switch(action.type){
        case actionTypes.SET_ERROR:
            return {error:error};
        case actionTypes.CLEAR_ERROR:
            return {error:null};
        default:
            return state;
    }
    
}

export default errorReducer;