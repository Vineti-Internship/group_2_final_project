import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {orderReducer} from './reducers/orderReducer';

const initialState = {};
const store = createStore(
    combineReducers({
        'root':rootReducer,
        'order': orderReducer,
    }),
    initialState,
    applyMiddleware(thunk)
);

export default store;