import {ADD_TO_ORDER,GET_ORDERS}  from './actionTypes';
import {generalFetch} from '../helpers/generalFetch'

export const getOrder = (userId) => {
    return async (dispatch) => {
        let order;
        try{
            order = await generalFetch(`orders/${userId}`, 'GET');
        }
        catch{
            order = await generalFetch('orders', 'POST',{'user_id':userId });
        }
        order = await generalFetch(`orders_products/adv/${userId}`, 'GET');        
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
