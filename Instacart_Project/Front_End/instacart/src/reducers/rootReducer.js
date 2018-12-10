import { combineReducers } from 'redux';
import  signInReducer  from './signInReduser';
import  orderReducer  from './orderReducer';
import  productReducer,{itemsIsLoading}  from './productReducer';

export default combineReducers({
    users: signInReducer,
    products: productReducer, 
    itemsIsLoading,
    orders: orderReducer
})