import { USER_SIGNIN } from '../actions/actionTypes'

const initialState = {
    user: {},
    errorMessage: ''
} 


export default function(state = initialState, action) {
  switch(action.type) {
    case USER_SIGNIN:    
        const user = action.payload;
        if(user){
            localStorage.setItem('user', user);
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
    default:
        return state;
  }
}
