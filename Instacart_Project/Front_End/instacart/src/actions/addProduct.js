import * as actionTypes from './actionTypes';

export const addToOrder = obj => ({
  type: actionTypes.addToOrder,
  payload: obj
});