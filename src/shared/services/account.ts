import { API } from "./api";
import { msgError,msgSuccess } from "../helpers/msg";

type userType = {
  name: string;
  email: string;
};
export const updateUser = async (user: userType) => { 

  try {
    let response = await API.put(`/user/update`, user);    
    if (response.status === 200) {
        msgSuccess("User successfully updated!");
      return true;
    }
    if (response.status === 404) {
      throw new Error("Unavailable server");
    }
    throw new Error(response.data.error.message);
  } catch (error) {
    msgError(`${error}`);
    return false;
  }
};