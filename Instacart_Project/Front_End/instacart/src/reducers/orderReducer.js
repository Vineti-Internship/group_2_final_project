import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export default (order = initialState, action) => {
    switch (action.type) {
    case actionTypes.ADD_TO_ORDER:
        return [...order, action.payload];
    case actionTypes.GET_ORDERS:
        return action.payload;
    default:
      return order;
  }
};