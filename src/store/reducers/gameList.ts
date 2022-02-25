import { LISTGAME,CURRENTGAME } from "../actions/gameList";

type Game = {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
};
type GameListType = {
 list: {
  min_cart_value: number;
  types: Game[];
 };
  currentGame: Game;
};
const InitialValueGames: GameListType = {
    list: {
    min_cart_value: 0,
    types: [],
    },
    currentGame: {
        id: 0,
        type: "",
        description: "",
        range: 0,
        price: 0,
        max_number: 0,
        color: "",
    },
};

type actionType ={
    type:string;
    game?:GameListType;
    currentGame?:Game
}

export default (state = InitialValueGames, action:actionType) => {
    switch (action.type) {    
      case LISTGAME:      
        return {
          ...state,list:action.game    
        };
      case CURRENTGAME:
        return{
            ...state,currentGame:action.currentGame
        }
      default:
        return state;
    }
  };