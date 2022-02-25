import { AUTHENTICATE,login,logout,auth } from "./auth";
import {LISTGAME,CURRENTGAME,fetchGameList} from "./gameList"
import { SAVEGAMECART,saveGameCart } from "./cart";

export const actions ={auth,login,logout,fetchGameList,saveGameCart}
export const typeAction = {AUTHENTICATE,LISTGAME,CURRENTGAME,SAVEGAMECART}