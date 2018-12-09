import { USER_SIGNIN } from '../actions/actionTypes'

const initialState = {
    user: {}
} 


export default function(state = initialState, action) {
  switch(action.type) {
    case USER_SIGNIN:    
        return {
            user: action.payload 
        };
    default:
        return state;
  }
}
