import { API } from "./api";
// import { createSession } from "../helpers/localStorage";
// import Toast from 'toastify-react-nativer';
import Toast from 'react-native-toast-message';

export const loginUser = async (email: string, password: string) => {
  const request = `login`;
  const data = JSON.stringify({ email, password });
  try {
    let response = await API.post(request, data);    
    if (response.status === 200) {      
      return response.data.token;
    }
    if (response.status === 401) {
      throw new Error("Senha ou Email inválido! ");
    }
    if (response.status === 404) {
      throw new Error(
        "Não foi possivel realizar login, servidor indisponível."
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
