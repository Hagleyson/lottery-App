import { createSession, destroySession,loginUser,dispatchType } from "@shared/index";

export const AUTHENTICATE = "AUTHENTICATE";

export const auth = (token:string)=>{  
  return async (dispatch:dispatchType) => { 
    dispatch({ type: AUTHENTICATE, token: token }); 
    createSession(token)      
  }
}

export const login = (email:string, password:string) => {    
    return async (dispatch:dispatchType) => {            
      const response = await loginUser(email,password);      
      if(response){        
        dispatch(auth(response.token))   
      }
    };
};

export const logout = ()=>{
  return async(dispatch:dispatchType)=>{
    destroySession();
    dispatch({ type: AUTHENTICATE, token: null }); 
    return;
  }
}