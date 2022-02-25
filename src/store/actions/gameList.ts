import { fetchGame } from "../../shared";

export const LISTGAME = "LISTGAME"
export const CURRENTGAME = "CURRENTGAME"
import { dispatchType } from "../../shared";
export const fetchGameList =()=>{
  return async (dispatch:dispatchType)=>{
    const response = await fetchGame()
    if(response){
     await dispatch({type:LISTGAME,game:response});
     await dispatch({type:CURRENTGAME,currentGame:response.types[0]});
    }   
  }
}

export const selectCurrentGame =(data:dispatchType)=>{
    return async (dispatch:dispatchType)=>{
        dispatch({type:CURRENTGAME,currentGame:data})
    }
}