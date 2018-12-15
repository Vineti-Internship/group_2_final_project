import {ADD_TO_ORDER,GET_ORDERS,REMOVE_FROM_ORDER}  from './actionTypes';
import {generalFetch} from '../helpers/generalFetch'

export const getOrder = (userId) => {
    return async (dispatch) => {
        const corder = await generalFetch(`orders_products/${userId}`, 'GET'); 
    
        dispatch({
            type: GET_ORDERS,
            payload: corder
        });
    }
}
export const addProduct = (obj) => {
    return async (dispatch) => {
        if(!obj.order_id){
            const user =await JSON.parse(localStorage.getItem('user'))
            const order = await generalFetch('orders', 'POST',{'order':{'user_id':user.id }});
            obj.order_id=order.id;
        }
        const createOrd= await generalFetch('orders_products/', 'POST',{"orders_product": obj}); 
        dispatch({
            type: ADD_TO_ORDER,
            payload: createOrd
        });
    }
};
export const deleteP = (id) => {
    return async (dispatch) => {
        await generalFetch(`orders_products/${id}`, 'DELETE'); 
        dispatch({
            type: REMOVE_FROM_ORDER,
            payload: id
        });
    }
}