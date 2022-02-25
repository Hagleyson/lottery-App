
import { SAVEGAMECART,REMOVEGAMECART} from "../actions/cart";

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
      case SAVEGAMECART:      
        return {
          ...state,
          cartGame: {
            totalCart: state.cartGame.totalCart + action.payload.value,
            cart: [...state.cartGame.cart, action.payload.game]
          }
        };    
      case REMOVEGAMECART:  
        return {
          ...state,
          cartGame:{
            totalCart:state.cartGame.totalCart - action.payload.value,
            cart: state.cartGame.cart.filter((cart)=> cart.id !== action.payload.gameId)
          }
        }  
      default:
        return state;
    }
  };