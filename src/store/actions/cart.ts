export const SAVEGAMECART = "SAVEGAMECART"

type itemGame ={
  id:number,
  game_id:number,
  color:string,
  price:number,
  numbers:number[]
}

export const saveGameCart =(game:itemGame,value:number)=>{
  return async (dispatch:({})=>void)=>{        
     await dispatch({type:SAVEGAMECART,game,value});
          
  }
}
