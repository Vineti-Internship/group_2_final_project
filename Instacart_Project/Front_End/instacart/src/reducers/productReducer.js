import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export const itemsIsLoading=(state = true, action)=> {
    switch (action.type) {
        case actionTypes.isProductLoad:
            return action.isLoading;
        default:
            return state;
    }
}
export default (products = initialState, action) => {
    switch (action.type) {
    case actionTypes.fetchData:
        return action.payload;
    default:
      return products;
  }
};