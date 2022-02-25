import { dispatchType } from './../../shared/type/dispatchType';
export const SAVEGAMECART = "SAVEGAMECART"
export const REMOVEGAMECART = "REMOVEGAMECART"
export const CLEARCART ="CLEARCART"
type item={
  id: number,      
  game_id: number,      
  price:number,
  numbers: number[],      
}

export const saveGameCart =(game:item,value:number)=>{
  return async (dispatch:dispatchType)=>{        
     await dispatch({type:SAVEGAMECART,payload:{game,value}});
          
  }
}

export const removeGameCart =(gameId:number,value:number)=>{
  return async (dispatch:dispatchType)=>{        
     await dispatch({type:REMOVEGAMECART,payload:{gameId,value}});
          
  }
}

export const clearCart = ()=>{
  return async(dispatch:dispatchType)=>{        
    await dispatch({type:CLEARCART});
         
 }
}