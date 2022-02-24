import axios from "axios";
import { getSession, destroySession  } from "../helpers/localStorage";

const API = axios.create({
  baseURL: "http://192.168.1.12:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(async(config) => {  
  const sessionObject = await getSession();  
  if (sessionObject) {
    config.headers = {
      Authorization: `Bearer ${sessionObject}`,
    };
  }
  return config;
});
export const  interceptors =(store:any)=>{
  API.interceptors.response.use(
    (value) => {      
      return Promise.resolve(value);
    },
    (error) => {   
      const { isAxiosError = false, response = null } = error;       
      if(isAxiosError && response.data.errors){
        destroySession();
        store.dispatch({type:"AUTHENTICATE",token:null})
        throw new Error("Expired section!")
      }
      return response;
    }
  )
}



export { API };
