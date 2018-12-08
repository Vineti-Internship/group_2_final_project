import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export default (order = initialState, action) => {
    switch (action.type) {
    case actionTypes.addToOrder:
        return [...order, action.payload];
    default:
      return products;
  }
};