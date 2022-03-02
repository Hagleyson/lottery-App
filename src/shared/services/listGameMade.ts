import { API } from "./api";
import { msgError } from "../helpers/msg";

export const listGamesMade = async (urls?: string[]) => {        
  try {           
    let response = await API.get(`/bet/all-bets`,  {      
      params:{type:urls}
    });        
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
    throw new Error();
  } catch (error) {
    msgError (`Erro ${error}`);
    return false;
  }
};