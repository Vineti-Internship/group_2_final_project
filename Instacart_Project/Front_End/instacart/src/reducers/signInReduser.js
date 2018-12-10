import { USER_SIGNIN } from '../actions/actionTypes'

const initialState = {
    user: {}
} 


export default function(state = initialState, action) {
  switch(action.type) {
    case USER_SIGNIN:    
        const user = action.payload;
        localStorage.setItem("token", user.authentication_token);
        state = {
            ...state,
            user
        };
        return state;
    default:
        return state;
  }
}
