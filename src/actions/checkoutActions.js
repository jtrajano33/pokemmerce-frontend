import axios from 'axios';

export const getCheckOutOrders = orders => dispatch => {
    dispatch({
        type: "GET_CHECKOUT_ORDERS",
        payload: orders
    })
}

export const addCheckOutOrders = orders => dispatch => {
    dispatch({type: "IS_LOADING_CHECKOUT"})
    axios.post("https://pokemmerce-backend.herokuapp.com/checkout", orders ).then(res => {
        dispatch({
            type: "ADD_CHECKOUT_ORDERS_SUCCESS",
            payload: res.data
        })

    })
    .catch(err => {
        dispatch({
            type: "ADD_CHECKOUT_ORDERS_FAILED",
            payload: err.response.data
        })
    })

}