import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export default (order = initialState, action) => {
    switch (action.type) {
    case actionTypes.ADD_TO_ORDER:
        const norder =[...order,action.payload];
        norder.forEach(element => {
            element.order.pCost=+element.order.pCost+ (action.payload.quantinity*action.payload.product.price);
        });
        return norder;
    case actionTypes.GET_ORDERS:
        return (action.payload!==undefined)?action.payload:null;
    case actionTypes.REMOVE_FROM_ORDER:
        const nord=[...order];
        const index = nord.findIndex(x => x.id===action.payload);
        const price = nord[index].quantinity*(+nord[index].product.price);
        nord.splice(index,1);
        nord.forEach(element => {
            element.order.pCost = +element.order.pCost- price;
        });
        return nord; 
    default:
      return order;
  }
};