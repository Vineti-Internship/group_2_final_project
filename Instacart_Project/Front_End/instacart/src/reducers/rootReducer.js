import { combineReducers } from 'redux';
import  signInReducer  from './signInReduser';
import  orderReducer  from './orderReducer';

export default combineReducers({
    users: signInReducer,
    orders: orderReducer
})