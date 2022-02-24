import React, { useEffect, useState } from "react";
import { Platform,ScrollView } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { Title,HeaderButton as CustomHeaderButton, Container, Button,ModalComponent,Ball, Loader } from "../../components";
import { msgInfo } from "../../shared/helpers/msg";
import { RooStateType,actions } from "../../store";

const NewGameScreen = (props: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [modalIsOpen,setModalIsOpen] = useState(false)  
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const game = useSelector((state:RooStateType) => state.gameList.list)
  const currentGame  = useSelector((state:RooStateType)=>state.gameList.currentGame)
  
  const dispatch =useDispatch()
  
  const handlerSelectNumber = (number: number) => {
    let currentNumberSelected: number[] = [...selectedNumbers];

    if (currentNumberSelected.some((element: number) => element === number)) {
      currentNumberSelected.splice(currentNumberSelected.indexOf(number), 1);
    } else if (currentNumberSelected.length >= currentGame["max_number"]) {
      msgInfo("Can't add numbers anymore");
    } else if (
      !currentNumberSelected.some((element: number) => element === number)
    ) {
      currentNumberSelected.push(number);
    }
    setSelectedNumbers(currentNumberSelected);
  };

  const handleComplete = () => {
    let currentNumberSelected: number[] = [...selectedNumbers];
    if (currentNumberSelected.length === currentGame["max_number"]) {
      msgInfo("Unable to add numbers");
    }
    for (
      let index = 0;
      currentNumberSelected.length < currentGame["max_number"];
      index++
    ) {
      const aleatorio = Math.ceil(Math.random() * currentGame.range);
      if (currentNumberSelected.length <= 0) {
        currentNumberSelected.push(aleatorio);
      }
      if (!currentNumberSelected.some((element) => element === aleatorio)) {
        currentNumberSelected.push(aleatorio);
      }
    }
    setSelectedNumbers(currentNumberSelected);
  };

  const ListNumbersGame = () => {
    const numbers = Array(currentGame.range).fill(0);
    return numbers.map((n, c) => {
      const itemIsSelected = !!selectedNumbers.find(
        (element: number) => element === c + 1
      );
      return (
        <Ball
         key={c}
         color={itemIsSelected?currentGame.color:undefined}
         number={c + 1 < 10 ? `0${c + 1}` : `${c + 1}`}
         onClick={handlerSelectNumber.bind(null, c + 1)}
        />
      );
    });
  };

  const handlerClear = () => {
    setSelectedNumbers([]);
  };

  useEffect(()=>{    
    setIsLoading(true)
    dispatch(actions.fetchGameList())
    setIsLoading(false)
  },[])

  return (
    <Container type="first">     
     { isLoading?
     <Loader/>:
     <>
      <Container type="filter">
        <Title fontsize="20">Choose a game</Title>    
        <Button icon="md-options-outline" handleClick={()=>setModalIsOpen(true)}/>        
      </Container>    
      <Container type="text">
        <Title centered>NEW BET <Title type="light">FOR {(currentGame.type).toUpperCase()}</Title></Title>          
        <Title type="description" fontsize="19">Fill your bet</Title>
        <Title fontsize="19" type="light"> {currentGame.description}</Title>
      </Container>  
      
        <ScrollView>
          <Container type="game">
            {currentGame && ListNumbersGame()}
            </Container>
        </ScrollView>  
        <Container type="containerButtons">
          <Button typeStyle="normal" title="Complete game" handleClick={handleComplete}/>
          <Button typeStyle="normal" title="Clear game" handleClick={handlerClear}/>
          <Button typeStyle="normal" color="2" title="Add to cart" handleClick={()=>{}}/>
        </Container>
      {modalIsOpen ?<ModalComponent isVisible={modalIsOpen} onClose={()=>setModalIsOpen(false)}/>:<></>}
      </>}
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
