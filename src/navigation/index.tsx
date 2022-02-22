import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation, GameDrawerNavigator } from "./GameNavigator";
import { Home } from "../screens/Index";

const AppNavigator = (props: any) => {
  const [togglePage, setTogglePage] = useState(false);

  const isAuth = false;
  const handleRedirect = () => {
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
