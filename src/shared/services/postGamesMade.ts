import { msgError,msgSuccess } from "../helpers/msg";
import { API } from "./api";

type postGameType = {
  games: {
    game_id: number;
    numbers: number[];
  }[];
};
export const postGamesMade = async (values: postGameType) => {  
  try {
    let response = await API.post(`/bet/new-bet`, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
        msgSuccess("Itens salvo com sucesso!!!");
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }

    throw new Error();
  } catch (error) {
    msgError(`${error}`);
    return;
  }
};