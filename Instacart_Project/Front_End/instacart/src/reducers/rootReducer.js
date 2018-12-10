import { combineReducers } from 'redux';
import  signInReducer  from './signInReduser';
import  orderReducer  from './orderReducer';
import shopReducer from './shopReducer';

export default combineReducers({
    users: signInReducer,
    orders: orderReducer,
    shops: shopReducer
})