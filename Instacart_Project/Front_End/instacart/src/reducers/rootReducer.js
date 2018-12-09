import { combineReducers } from 'redux';
import  signInReducer  from './signInReduser';

export default combineReducers({
    users: signInReducer
})