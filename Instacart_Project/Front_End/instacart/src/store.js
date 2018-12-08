import {createStore, combineReducers} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import {orderReducer} from './reducers/orderReducer';

export default createStore(combineReducers({
    'root':rootReducer,
    'order': orderReducer,
}));

// import todoReducer from './reducers/todo_reducer';

// export default createStore(combineReducers({
//   todos: todoReducer
// }));