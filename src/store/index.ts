import  ReduxThunk  from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

import {auth,gameList} from "./reducers/";
import { actions,typeAction } from "./actions/";
import { interceptors } from '../shared/';

const rootReducer = combineReducers({
    auth:auth,
    gameList:gameList
  })

type RooStateType = ReturnType<typeof store.getState>
export const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

interceptors(store)



export {auth,actions,typeAction, RooStateType}