import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';
import checkoutReducer from './checkoutReducer';

const rootReducer = combineReducers({
    items: itemReducer,
    user: userReducer,
    orders: orderReducer,
    checkout: checkoutReducer
})

export default rootReducer;