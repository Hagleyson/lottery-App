import { AUTHENTICATE,login,logout,auth } from "./auth";
import {LISTGAME,CURRENTGAME,fetchGameList} from "./gameList"

export const actions ={auth,login,logout,fetchGameList}
export const typeAction = {AUTHENTICATE,LISTGAME,CURRENTGAME}