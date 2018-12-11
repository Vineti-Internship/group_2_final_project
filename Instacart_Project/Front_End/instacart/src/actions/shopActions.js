import {GET_SHOPS, GET_SHOP_PRODUCTS} from './actionTypes';
import { generalFetch } from '../helpers/generalFetch';

export const getShops = () => {
    return async (dispatch) => {
        const shops = await generalFetch('shops', 'GET', {});
        dispatch({
            type: GET_SHOPS,
            payload: shops
        });
    }
}

export const getShopProducts = (shopId) => {
    return async (dispatch) => {
        const products = await generalFetch(`shops/${shopId}`, 'GET', {});
        dispatch({
            type: GET_SHOP_PRODUCTS,
            payload: products
        });
    }
}