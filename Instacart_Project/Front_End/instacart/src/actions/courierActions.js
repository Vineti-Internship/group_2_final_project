import {GET_COURIERS} from './actionTypes';
import {generalFetch} from '../helpers/generalFetch';

export const getCouriers = () => {
    return async (dispatch) => {
        const couriers = await generalFetch('couriers', 'GET', {});
        dispatch({
            type: GET_COURIERS,
            payload: couriers
        });
    }
}