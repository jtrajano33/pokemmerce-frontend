import axios from 'axios';
import { toast } from 'react-toastify';

export const addOrder = payload => dispatch => {
    dispatch({
        type: "IS_LOADING"
    })
    axios.post("http://localhost:5000/orders", payload).then(res => {
        toast.success("Pokemon added to cart")
        dispatch({
            type: "ADD_ORDER_SUCCESS",
            payload: res.data
        })
    })
    .catch(err => {
        toast.error("Failed to add pokemon to cart")
        dispatch({
            type: "ADD_ORDER_FAILED",
            payload: err.response.data
        })
    })
}

export const getOrders = () => (dispatch, getState) => {

    const userId = getState().user.userId
    dispatch({
        type: "IS_LOADING"
    })
    axios.get("http://localhost:5000/orders").then(res => {
        dispatch({
            type: "GET_ORDERS_SUCCESS",
            payload: {orders: res.data.orders, userId}
        })
    })
    .catch(err => {
        dispatch({
            type: "GET_ORDERS_FAILED",
            payload: err.response
        })
    })
}

export const deleteOrder = id => dispatch => {
    axios.delete(`http://localhost:5000/orders/${id}`).then(res => {
        toast.success("Pokemon removed from cart")
        dispatch({
            type: "DELETE_ORDER_SUCCESS",
            payload: res.data
        })
    })
    .catch(err => {
        toast.error("Failed to remove pokemon")
        dispatch({
            type: "DELETE_ORDER_FAILED",
            payload: err.response
        })
    })
}

export const clearCount = () => dispatch => {
    dispatch({type:"CLEAR_COUNT"})
}