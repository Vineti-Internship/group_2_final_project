import { GET_SHOPS, GET_SHOP_PRODUCTS, GET_COURIERS } from '../actions/actionTypes'

const initialState = {
    shops: [],
    currentShopProducts: [],
    couriers: []
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
    case GET_COURIERS:
        const couriers = action.payload
        state = {
            ...state,
            couriers
        };
        return state;    
    default:
        return state;
  }
}