import { API } from "./api";
import { msgError,msgSuccess } from '../helpers/msg';

export const resetPassword = async (token:string,value: string) => {  
  const data = JSON.stringify(token?{password:value}:{ email:value });  
  try {
    let response = await API.post(`reset${token&&`/${token}`}`, data);    
    if (response.status === 200) {
        msgSuccess(`Successful email reset!`)       
      return {token:response.data.token,status:true};
    }
    if (response.status === 404) {
      throw new Error("User not found!");
    }
    throw new Error();
  } catch (error) {
    msgError(`${error}`)     
    return false;
  }
};