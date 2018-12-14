import { USER_SIGNIN, USER_SIGNOUT } from '../actions/actionTypes'

const initialState = {
    user: {},
    errorMessage: ''
} 


export default function(state = initialState, action) {
  switch(action.type) {
    case USER_SIGNIN:    
        const user = action.payload;
        if(user){
            localStorage.setItem('user', JSON.stringify(user));
            state = {
                ...state,
                user
            };
        } else {
            state = {
                ...state,
                errorMessage: "Wrong email or password"
            };
        }
        return state;
    case USER_SIGNOUT:
        state = {
            ...state,
            user: {}
        };
        localStorage.removeItem('user');
        return state
    default:
        return state;
  }
}
