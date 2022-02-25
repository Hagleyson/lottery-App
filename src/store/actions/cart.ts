export const SAVEGAMECART = "SAVEGAMECART"
export const REMOVEGAMECART = "REMOVEGAMECART"

type item={
  id: number,      
  game_id: number,      
  price:number,
  numbers: number[],      
}

export const saveGameCart =(game:item,value:number)=>{
  return async (dispatch:({})=>void)=>{        
     await dispatch({type:SAVEGAMECART,payload:{game,value}});
          
  }
}

export const removeGameCart =(gameId:number,value:number)=>{
  return async (dispatch:({})=>void)=>{        
     await dispatch({type:REMOVEGAMECART,payload:{gameId,value}});
          
  }
}