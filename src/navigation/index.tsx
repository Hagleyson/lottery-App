import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation, GameDrawerNavigator } from "./GameNavigator";

import { Home } from "../screens/Index";
import {getSession} from "../shared/"

import { useSelector,useDispatch } from "react-redux";
import {RooStateType,actions} from "../store"


const AppNavigator = (props: any) => {
  const [togglePage, setTogglePage] = useState(false);  
  const isAuth = useSelector((state:RooStateType) => state.auth.token);        
  const  dispatch = useDispatch()
  
  const handleRedirect = async () => {
    const token = await getSession()
    dispatch(actions.auth(token))
    setTogglePage(true);    
  };
  
  return (
    <NavigationContainer>
      {!togglePage ? <Home redirect={handleRedirect} /> : <></>}
      {!isAuth && togglePage ? <AuthNavigation /> : <></>}
      {isAuth && togglePage ? <GameDrawerNavigator /> : <></>}
    </NavigationContainer>
  );
};

export default AppNavigator;
