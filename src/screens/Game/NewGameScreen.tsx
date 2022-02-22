import React, { useState } from "react";
import { Platform,ScrollView } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Title,HeaderButton as CustomHeaderButton, Container, Button,ModalComponent,Ball } from "../../components";

const NewGameScreen = (props: any) => {
  const [modalIsOpen,setModalIsOpen]=useState(false)  
  return (
    <Container type="first">
      <Container type="filter">
        <Title fontsize="20">Choose a game</Title>    
        <Button icon="md-options-outline" handleClick={()=>setModalIsOpen(true)}/>        
      </Container>    
      <Container type="text">
        <Title centered>NEW BET <Title type="light">FOR {"MEGA SENA"}</Title></Title>          
        <Title type="description" fontsize="19">Fill your bet</Title>
        <Title fontsize="19" type="light"> Mark as many numbers as you want up to a maximum of 50. 
          Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 number drawn.</Title>
      </Container>  
      
        <ScrollView>
          <Container type="game">
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/> 
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/> 
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/>
              <Ball number="10"/> 
            </Container>
        </ScrollView>  
        <Container type="containerButtons">
          <Button typeStyle="normal" title="Complete game" handleClick={()=>{}}/>
          <Button typeStyle="normal" title="Clear game" handleClick={()=>{}}/>
          <Button typeStyle="normal" color="2" title="Add to cart" handleClick={()=>{}}/>
        </Container>
      {modalIsOpen ?<ModalComponent isVisible={modalIsOpen} onClose={()=>setModalIsOpen(false)}/>:<></>}
  </Container>
  );
};

export const screenOptions = (navData:any) => ({
  headerTitle: ()=> <Title color="white">New Game</Title>,     
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Cart"
        iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
        
        onPress={() => {
          navData.navigation.navigate({"name":"CartGame"});
        }}
      />
    </HeaderButtons>
  ),
})
export default NewGameScreen;
