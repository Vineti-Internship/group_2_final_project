import { USER_SIGNIN } from './actionTypes';

export const signInUser = (postData) => dispatch => {
console.log('action called')

    fetch('http://localhost:3000/sessions', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)        
    })
    .then(res => res.json())
    .then(userInfo =>
        dispatch({
            type: USER_SIGNIN,
            payload: userInfo
        })
    )
}
