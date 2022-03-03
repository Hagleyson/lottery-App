import { SAVEGAMECART,REMOVEGAMECART, CLEARCART,START} from "../actions/cart";

import {saveItemsCard} from "@shared/index"

type cartGame = {    
    color: string,
    game_id: number,
    id: number,
    numbers: number[],
    price:number,   
}

type GameListType = {
  cartGame:{
    totalCart:number,
    cart:cartGame[]
  }  
};

const InitialValueGames: GameListType = {
  cartGame:{
    totalCart:0,
    cart:[]
  }   
};

type actionType ={
  type:string;
  payload:any
}

export default (state = InitialValueGames, action:actionType) => {
    switch (action.type) {    
      case START:
        return action.payload      
      case SAVEGAMECART:      
        let newStatus = {
          ...state,
          cartGame: {
            totalCart: state.cartGame.totalCart + action.payload.value,
            cart: [...state.cartGame.cart, action.payload.game]
          }}
          saveItemsCard(newStatus)
          
        return {
          ...newStatus
        };    
      case REMOVEGAMECART:  
        newStatus = {
          ...state,
          cartGame:{
            totalCart:state.cartGame.totalCart - action.payload.value,
            cart: state.cartGame.cart.filter((cart)=> cart.id !== action.payload.gameId)
          }
        }  
        saveItemsCard(newStatus)        
        return {...newStatus}
      case CLEARCART:
         newStatus= {
          ...state,
          cartGame:{
            totalCart:0,
            cart:[]
          }
        }
        saveItemsCard(newStatus)
        return {...newStatus}
      default:
        return state;
    }
  };