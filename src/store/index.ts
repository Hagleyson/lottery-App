import  ReduxThunk  from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

import {auth,gameList,cart} from "./reducers/";
import { actions,typeAction } from "./actions/";
import { interceptors } from '../shared/';

const rootReducer = combineReducers({
    auth:auth,
    gameList:gameList,
    cartGame:cart
  })

type rootStateType = ReturnType<typeof store.getState>
export const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

interceptors(store)



export {auth,actions,typeAction, rootStateType}