import * as actionTypes from './actionTypes';
import {generalFetch} from '../helpers/generalFetch'

export const addToOrder = obj => ({
  type: actionTypes.addToOrder,
  payload: obj
});

export const itemsFetchDataSuccess=(items)=> {
    return {
        type: actionTypes.fetchData,
        payload: items
    };
}
export const itemsIsLoading=(bool=true)=> {
    return {
        type: actionTypes.isProductLoad,
        isLoading: bool
    };
}
export const itemsFetchData=(url)=> {
    return (dispatch) => {
        dispatch(itemsIsLoading(true))
        generalFetch(url,'GET').then(
            (items)=>{
                dispatch(itemsFetchDataSuccess(items))
                dispatch(itemsIsLoading(false));
            }
        );
    };
}