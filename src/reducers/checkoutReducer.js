

const initState = {
    checkoutOrders: null,
    completedOrder:null,
    message:null,
    isLoading: false,
    successOrder:false,
}

const checkoutReducer = (state = initState , action) => {
    switch(action.type){

        case "GET_CHECKOUT_ORDERS":
            return {
                ...state, checkoutOrders: action.payload
            }
        case "IS_LOADING_CHECKOUT":
            return{...state, isLoading:true}

        case  "ADD_CHECKOUT_ORDERS_SUCCESS":
            return{...state, completedOrder: action.payload.order, isLoading:false, successOrder:true}
        case  "ADD_CHECKOUT_ORDERS_FAILED":
                return{...state, message:action.payload.msg, isLoading:false}
        default:
            return state;
    }
}

export default checkoutReducer;