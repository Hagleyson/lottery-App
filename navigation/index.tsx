import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation, GameDrawerNavigator } from "./GameNavigator";

const AppNavigator = (props: any) => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth ? <GameDrawerNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
