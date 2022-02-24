import  ReduxThunk  from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import auth from "./reducers/auth";
import { actions,typeAction } from "./actions/";

const rootReducer = combineReducers({
    auth:auth
  })

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))
type RooStateType = ReturnType<typeof store.getState>


export {store,auth,actions,typeAction, RooStateType}