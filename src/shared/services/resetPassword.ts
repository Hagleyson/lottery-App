import { API } from "./api";
import { msgError,msgSuccess } from '../helpers/msg';

export const resetPassword = async (email: string) => {  
  const data = JSON.stringify({ email });
  try {
    let response = await API.post(`reset`, data);
    if (response.status === 200) {
        msgSuccess(`Successful email reset!`)       
      return true;
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