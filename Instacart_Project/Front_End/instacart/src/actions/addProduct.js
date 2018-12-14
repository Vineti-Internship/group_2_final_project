import {ADD_TO_ORDER,GET_ORDERS}  from './actionTypes';
import {generalFetch} from '../helpers/generalFetch'

export const getOrder = (userId) => {
    return async (dispatch) => {
        // let order;
        // try{
        //     order = await generalFetch(`orders/${userId}`, 'GET');
        // }
        // catch{
        //     order = await generalFetch('orders', 'POST',{'user_id':userId });
        // }
        const corder = await generalFetch(`orders_products/adv/${userId}`, 'GET'); 
        // console.log('aaaaaaaaa',corder);
        // if(corder.length===0){
        //     corder[0]={order}
        // }       
        dispatch({
            type: GET_ORDERS,
            payload: corder
        });
    }
}
export const addProduct = (obj) => {
    return async (dispatch) => {
        console.log(obj)
        let order;
        console.log({'order':{'user_id':obj.user }});
        if(!obj.order_id){
            order = await generalFetch('orders', 'POST',{'order':{'user_id':obj.user }});
        }
        obj.order_id=order.id;
        const createOrd= await generalFetch('orders_products/', 'POST',{"orders_product": obj}); 
        dispatch({
            type: ADD_TO_ORDER,
            payload: createOrd
        });
    }
};
