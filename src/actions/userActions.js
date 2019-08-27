import axios from 'axios';

export const signUp = payload => dispatch => {
    dispatch({type: "IS_LOADING_REGISTRATION"})
    axios.post("https://pokemmerce-backend.herokuapp.com/api/user", payload).then(res => {
        dispatch({
            type: "SIGN_UP_SUCCESS",
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: "SIGN_UP_FAILED",
            payload: err.response.data
        })
    })
} 


export const signIn = payload => dispatch => {
    dispatch({type: "IS_LOADING_LOGIN"})    
    axios.post("https://pokemmerce-backend.herokuapp.com/api/auth", payload).then(res => {
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: "LOGIN_FAIL",
            payload: err.response.data
        })
    })
} 

export const signOut = () => dispatch => {
    dispatch({ type:"LOGOUT_SUCCESS"})
}
