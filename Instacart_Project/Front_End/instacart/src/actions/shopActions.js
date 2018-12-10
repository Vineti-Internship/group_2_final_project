import {GET_SHOPS, GET_SHOP_PRODUCTS} from './actionTypes';
import { generalFetch } from '../helpers/generalFetch';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  };

export const getShops = () => {
    return async (dispatch) => {
        const shops = await generalFetch('shops', 'GET', {}, headers);
        dispatch({
            type: GET_SHOPS,
            payload: shops
        });
    }
}

export const getShopProducts = (shopId) => {
    return async (dispatch) => {
        const products = await generalFetch(`shops/${shopId}/products`, 'GET', {}, headers);
        dispatch({
            type: GET_SHOP_PRODUCTS,
            payload: products
        });
    }
}