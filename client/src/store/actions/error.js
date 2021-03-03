import {SET_ERROR, CLEAR_ERROR} from "./actiontypes"

export const setError = (error)=>{
    return {
        type:SET_ERROR,
        error:error
    }
}

export const clearError = ()=>{
    return {
        type:CLEAR_ERROR,
        error:null,
    }
}