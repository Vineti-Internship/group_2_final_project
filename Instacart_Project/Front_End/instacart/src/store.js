import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/rootReducer';
import {orderReducer} from './reducers/orderReducer';

export default createStore(
    combineReducers({
    'root':rootReducer,
    'order': orderReducer,
    }),
    applyMiddleware(thunk)
);
