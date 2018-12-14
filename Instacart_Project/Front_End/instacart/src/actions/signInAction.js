import { USER_SIGNIN, USER_SIGNOUT } from './actionTypes';
import { generalFetch } from '../helpers/generalFetch';

export const signInUser = (postData) => {
    return async dispatch => {
        const userInfo = await generalFetch('sessions', 'POST', postData);
        dispatch({
            type: USER_SIGNIN,
            payload: userInfo
        });
    }
}

export const signOutUser = () => {
    return {
        type: USER_SIGNOUT
    }
}
