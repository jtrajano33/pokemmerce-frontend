const initState = {
    orders: null,
    isLoading: false,
    message: null,
    messageSuccess: null,
    orderCount: 0,
    totalAmount: 0,
    userIdOrder: ""
}

const orderReducer = (state = initState , action) => {
    switch(action.type){
        case "ADD_ORDER_SUCCESS":
            return {...state, messageSuccess: action.payload.msg, orderCount: state.orderCount+1, isLoading:false};
        case "ADD_ORDER_FAILED":
                return state;
        case "GET_ORDERS_SUCCESS": 
            
            const orders = action.payload.orders
            
            const ordersPrice = orders.filter(order => order.user._id === action.payload.userId).map(order =>{
                return order.product.price
            })  

            
            const totalPrice = ordersPrice.reduce((a,b) => {
                return a+b
            },0)

                return { ...state,
                     orders: orders,
                    orderCount: ordersPrice.length,
                    isLoading: false,
                    totalAmount: totalPrice,
                    userIdOrder: action.payload.userId
                };
        case "GET_ORDERS_FAILED":
                return state;
        case "GET_ORDERS":
                return state;
         case "DELETE_ORDER_SUCCESS":
                
                const ordersRemaining = state.orders.filter(order => order._id !== action.payload.order._id);

                const ordersPriceRemaining = ordersRemaining.filter(order => order.user._id === state.userIdOrder).map(order =>{
                    return order.product.price
                })
    
                const totalPriceRemaining = ordersPriceRemaining.reduce((a,b) => {
                    return a+b
                },0)

                return  {...state, orders: state.orders.filter(order => order._id !== action.payload.order._id), orderCount: state.orderCount-1, totalAmount: totalPriceRemaining};
        case "DELETE_ORDER_FAILED":
                return {...state, isLoading: false};
        case "IS_LOADING":
                return {...state, isLoading:true};
        case "CLEAR_COUNT":
            return{...state, orderCount: 0}
        default:
            return state;
    }
}


export default orderReducer;