import React, { FC } from "react";
import {  Platform,  TouchableNativeFeedback,TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Title,Container,HeaderButton as CustomHeaderButton,Button } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../GlobalStyle";

const ListGameScreen = (props: any) => {
  return (
    <Container type="list">          
      <Container type="filter">
        <Title type="light">filters</Title>    
        <TouchableOpacity onPress={()=>console.log("OK")}>
        <Ionicons name="md-options-outline" size={30} color={theme.textPrimary}/>
        </TouchableOpacity>
      </Container>
    </Container>
  );
};


export const screenOptions = (navData:any) => ({
  headerTitle: ()=> <Title color="white">Recent Games</Title>, 
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
      <Item
        title="Menu"
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),  
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Cart"
        iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
        
        onPress={() => {
          navData.navigation.navigate({"name":"NewGame"});
        }}
      />
    </HeaderButtons>
  ),
})
  

export default ListGameScreen;
