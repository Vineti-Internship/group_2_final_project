import * as actionTypes from './actionTypes';
import {generalFetch} from '../helpers/generalFetch'

export const addToOrder = obj => ({
  type: actionTypes.addToOrder,
  payload: obj
});
