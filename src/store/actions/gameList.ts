import { fetchGame } from "../../shared";

export const LISTGAME = "LISTGAME"
export const CURRENTGAME = "CURRENTGAME"
import { dispatchType } from "../../shared";

export const fetchGameList =()=>{
  return async (dispatch:dispatchType)=>{
    const response = await fetchGame()
    if(response){
     await dispatch({type:LISTGAME,payload:response});
     await dispatch({type:CURRENTGAME,payload:response.types[0]});
    }   
  }
}

export const selectCurrentGame =(data:any)=>{
    return async (dispatch:dispatchType)=>{
        dispatch({type:CURRENTGAME,payload:data})
    }
}