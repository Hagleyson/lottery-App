import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import { Platform, View, SafeAreaView, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {theme} from "../GlobalStyle/index"

import {
  AccountScreen,
  AccountScreenOptions,
  CartGameScreen,
  CartGameScreenOptions,
  ListGameScreen,
  ListScreenOptions,
  NewGameScreen,
  NewGameScreenOptions,
  AutenticationScreen,
  RecoveryScreen,
  RegisterScreen,
} from "../screens/Index";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor:  theme.greenLemon ,
      },
  headerTitleStyle: {    
    fontSize: 25,     
  },
    headerTintColor: theme.white,
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
      />
      <AuthNav.Screen
        name="RecoveryScreen"
        component={RecoveryScreen}
      />
      <AuthNav.Screen
        name="Register"
        component={RegisterScreen}
      />
    </AuthNav.Navigator>
  );
};

const GameNav = createNativeStackNavigator();

const GameNavigator = () => {
  return (
    <GameNav.Navigator screenOptions={defaultNavOptions}> 
    <GameNav.Screen
        name="ListGame"
        component={ListGameScreen}
        options={ListScreenOptions}
      />    
      <GameNav.Screen
        name="NewGame"
        component={NewGameScreen}     
        options={NewGameScreenOptions}   
      />
      <GameNav.Screen
        name="CartGame"
        component={CartGameScreen}
        options={CartGameScreenOptions}
      />
    </GameNav.Navigator>
  );
};



const AccountNav = createNativeStackNavigator();

export const AccountNavigator =()=>{
  return <AccountNav.Navigator  screenOptions={defaultNavOptions}>
  <AccountNav.Screen
    name="AccountN"
    component={AccountScreen}
    options={AccountScreenOptions}
    />
  </AccountNav.Navigator>
}

const GameDrawerNav = createDrawerNavigator();

const drawerConfig={
  drawerStyle: {
    backgroundColor: theme.background,
    
  },       
  drawerActiveTintColor:theme.greenLemon,
  headerShown: false ,
  
  
}
export const GameDrawerNavigator = () => {
  return (
    <GameDrawerNav.Navigator  screenOptions={{...drawerConfig,...defaultNavOptions}}>
      <GameDrawerNav.Screen
        name="Game"
        component={GameNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-game-controller" : "ios-game-controller"}
              size={25}
              color={props.color}
            />
          ),
        }}
      />
      <GameDrawerNav.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-people-sharp" : "ios-people-sharp"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </GameDrawerNav.Navigator>
  );
};
