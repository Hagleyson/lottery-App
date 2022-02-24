import { msgError } from '../helpers/msg';
import { API } from "./api";

export const fetchGame = async () => {  
  try {
    let response = await API.get(`/cart_games`);
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
    throw new Error();
  } catch (error) {
    msgError(`Erro ${error}`);
    return false;
  }
};