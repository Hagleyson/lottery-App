import { API } from "./api";
import Toast from 'react-native-toast-message';

export const loginUser = async (email: string, password: string) => {
  const data = JSON.stringify({ email, password });
  try {
    let response = await API.post(`login`, data);    
    if (response.status === 200) {      
      return response.data.token;
    }
    if (response.status === 401) {
      throw new Error("Invalid email or password");
    }
    if (response.status === 404) {
      throw new Error(
        "Unable to login, server unavailable."
      );
    }
    throw new Error();
  } catch (error) {    
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: `${error}`
    });  
    return false;
  }
};
