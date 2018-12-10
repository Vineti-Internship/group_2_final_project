import { GET_SHOPS, GET_SHOP_PRODUCTS } from '../actions/actionTypes'

const initialState = {
    shops: [],
    currentShopProducts: []
} 


export default function(state = initialState, action) {
  switch(action.type) {
    case GET_SHOPS:    
        const shops = action.payload;
        state = {
            ...state,
            shops
        };
        return state;
    case GET_SHOP_PRODUCTS:
        const currentShopProducts = action.payload;    
        state = {
            ...state,
            currentShopProducts
        };
        return state;
    default:
        return state;
  }
}