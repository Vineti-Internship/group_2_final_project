import {ADD_TO_ORDER,GET_ORDERS}  from './actionTypes';
import {generalFetch} from '../helpers/generalFetch'

export const getOrder = (userId) => {
    return async (dispatch) => {
        const order = await generalFetch(`orders/${userId}`, 'GET');
        console.log(order);
        dispatch({
            type: GET_ORDERS,
            payload: order
        });
    }
}
export const addToOrder = obj => ({
  type: ADD_TO_ORDER,
  payload: obj
});
