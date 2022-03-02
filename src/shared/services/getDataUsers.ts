import { API } from "./api";
import { msgError } from "../helpers/msg";

export const getDataUser = async () => {
  const request = `/user/my-account`;
  try {
    let response = await API.get(request);
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
    throw new Error(response.data.error.message);
  } catch (error) {
    msgError(`${error}`);
    return false;
  }
};