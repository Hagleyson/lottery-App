import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Platform, View, SafeAreaView, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  AcountScreen,
  CartGameScreen,
  ListGameScreen,
  NewGameScreen,
  AutenticationScreen,
  RecoveryScreen,
  RegisterScreen,
} from "../screens/Index";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "gold" : "",
  },
  // headerTitleStyle: {
  //   fontFamily: "open-sans-bold",
  // },
  // headerBackTitleStyle: {
  //   fontFamily: "open-sans",
  // },
  headerTintColor: Platform.OS === "android" ? "white" : "gold",
};

const AuthNav = createNativeStackNavigator();
export const AuthNavigation = () => {
  return (
    <AuthNav.Navigator
      screenOptions={{ ...defaultNavOptions, headerShown: false }}
    >
      <AuthNav.Screen
        name="Autentication"
        component={AutenticationScreen}
        // options={AutenticationScreenOptions}
      />
      <AuthNav.Screen
        name="RecoveryScreen"
        component={RecoveryScreen}
        // options={RecoveryScreenOptions}
      />
      <AuthNav.Screen
        name="Register"
        component={RegisterScreen}
        // options={RegisterScreenOptions}
      />
    </AuthNav.Navigator>
  );
};

const GameNav = createNativeStackNavigator();

const GameNavigator = () => {
  return (
    <GameNav.Navigator screenOptions={defaultNavOptions}>
      <GameNav.Screen
        name="Acount"
        component={AcountScreen}
        // options={AcountScreenOptions}
      />
      <GameNav.Screen
        name="CartGame"
        component={CartGameScreen}
        // options={CartGameScreenOptions}
      />
      <GameNav.Screen
        name="ListGame"
        component={ListGameScreen}
        // options={ListGameScreenOptions}
      />
      <GameNav.Screen
        name="NewGame"
        component={NewGameScreen}
        // options={NewGameScreenOptions}
      />
    </GameNav.Navigator>
  );
};

const GameDrawerNav = createDrawerNavigator();

export const GameDrawerNavigator = () => {
  return (
    <GameDrawerNav.Navigator screenOptions={{ headerShown: true }}>
      <GameDrawerNav.Screen
        name="Game"
        component={GameNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <GameDrawerNav.Screen
        name="Account"
        component={AcountScreen}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </GameDrawerNav.Navigator>
  );
};
