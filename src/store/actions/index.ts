import { AUTHENTICATE,login,logout,auth } from "./auth";
import {LISTGAME,CURRENTGAME,fetchGameList,selectCurrentGame} from "./gameList"
import { SAVEGAMECART,saveGameCart,removeGameCart,REMOVEGAMECART,CLEARCART,clearCart } from "./cart";

export const actions ={auth,login,logout,fetchGameList,saveGameCart,selectCurrentGame,removeGameCart,clearCart}
export const typeAction = {AUTHENTICATE,LISTGAME,CURRENTGAME,SAVEGAMECART,REMOVEGAMECART,CLEARCART}