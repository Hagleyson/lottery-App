
import { SAVEGAMECART} from "../actions/cart";

type gameType = {   
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;   
}

type GameListType = {
  cartGame:{
    totalCart:number,
    cart:gameType[]
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
    game:gameType;
    value:number    
}

export default (state = InitialValueGames, action:actionType) => {
    switch (action.type) {    
      case SAVEGAMECART:      
        return {
          ...state,cartGame: {
            totalCart: state.cartGame.totalCart + action.value,
            cart: [...state.cartGame.cart, action.game]
          }
        };      
      default:
        return state;
    }
  };