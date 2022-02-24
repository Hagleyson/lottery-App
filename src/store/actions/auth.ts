import { createSession, loginUser,destroySession } from "../../shared";

export const AUTHENTICATE = "AUTHENTICATE";

export const auth = (token:string)=>{  
  return async (dispatch:any) => { 
    dispatch({ type: AUTHENTICATE, token: token }); 
    createSession(token)      
  }
}

export const login = (email:string, password:string) => {    
    return async (dispatch:any) => {            
      const response = await loginUser(email,password);      
      if(response){        
        dispatch(auth(response.token))   
      }
    };
};

export const logout = ()=>{
  return async(dispatch:any)=>{
    destroySession();
    dispatch({ type: AUTHENTICATE, token: null }); 
    return;
  }
}