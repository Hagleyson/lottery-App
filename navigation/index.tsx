import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation, GameDrawerNavigator } from "./GameNavigator";

const AppNavigator = (props: any) => {
  return (
    <NavigationContainer>
      <GameDrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
