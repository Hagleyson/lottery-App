import  ReduxThunk  from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

import auth from "./reducers/auth";
import { actions,typeAction } from "./actions/";
import { interceptors } from '../shared/';

const rootReducer = combineReducers({
    auth:auth
  })

export const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

interceptors(store)
type RooStateType = ReturnType<typeof store.getState>


export {auth,actions,typeAction, RooStateType}