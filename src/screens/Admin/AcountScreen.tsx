import React from "react";
import { View, Text, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Title,Container,HeaderButton as CustomHeaderButton } from "../../components";

const AcountScreen = (props: any) => {
  return (
    <View>
      <Text>AcountScreen</Text>
    </View>
  );
};

export const screenOptions = (navData:any) => ({
  headerTitle: ()=> <Title color="white">Account</Title>, 
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
})

export default AcountScreen;
