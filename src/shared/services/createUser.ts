import { API } from "./api";
import Toast from 'react-native-toast-message';
import { msgError } from "../helpers/msg";
export const createUser = async (
  user: string,
  email: string,
  password: string
) => {  
  const data = JSON.stringify({ name: user, email, password });
  try {
    let response = await API.post(`/user/create`, data);   
    if (response.status === 200) {
        Toast.show({type: 'success',
        text1: 'Sucess!',
        text2: "User registered successfully!"});
      return true;
    }
    if (response.status === 404) {
      throw new Error("Unavailable server");
    }
    if (response.data.error.message === "Email already exists") {
      throw new Error("This email is already registered!");
    }
    throw new Error(response.data.error.message);
  } catch (error) {
    msgError(`${error}`)    
    return false;
  }
};