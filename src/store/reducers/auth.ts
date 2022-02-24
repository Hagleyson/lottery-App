
import { AUTHENTICATE } from "../actions/auth";


const initialState:{token:string|null} = {
  token: null 
};
type actionType ={
 type:string,
 token:string|null
}
export default (state = initialState, action:actionType) => {
  switch (action.type) {    
    case AUTHENTICATE:      
      return {
        token: action.token,        
      };
    default:
      return state;
  }
};