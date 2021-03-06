import React, { useCallback, useEffect, useState } from "react";
import { Platform,ScrollView } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { Title,HeaderButton as CustomHeaderButton, Container, Button,ModalComponent,Ball, Loader } from "@Components/index";
import { msgInfo,msgSuccess } from "@shared/helpers/msg";
import { rootStateType,actions } from "@store/index";

const NewGameScreen = () => {  
  const [isLoading, setIsLoading] = useState(false)
  const [modalIsOpen,setModalIsOpen] = useState(false)  
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);    
  

  const games = useSelector((state:rootStateType) => state.gameList.list.types)  
  const currentGame  = useSelector((state:rootStateType)=>state.gameList.currentGame)
  
  
  const dispatch =useDispatch()
  
  const handlerSelectNumber = useCallback((number: number) => {
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
  },[selectedNumbers,currentGame]);

  const handleComplete = useCallback(() => {
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
  },[selectedNumbers,currentGame]);

  const ListNumbersGame = useCallback(() => {
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
  },[currentGame,selectedNumbers])

  const handlerClear = () => {
    setSelectedNumbers([]);
  };

  const handlerAddToCar =useCallback( async () => {
    if (selectedNumbers.length < currentGame["max_number"]) {
      const missingItem = currentGame["max_number"] - selectedNumbers.length;
      msgInfo(
        `select more ${missingItem} ${missingItem === 1 ? "item" : "items"}.`
      );
      return;
    }
    const itemCard = {
      id: Date.now(),
      game_id: currentGame.id,      
      price:currentGame.price,
      numbers: selectedNumbers.sort((a: number, b: number) => a - b),      
    };
    await dispatch(actions.saveGameCart(itemCard,currentGame.price))
    msgSuccess("Game successfully added to cart")
    handlerClear();
  },[selectedNumbers,currentGame,dispatch]);

  const handleGame = useCallback((id: number) => {
    const newGame = games.filter((g: any) => g.id === id);    
    dispatch(actions.selectCurrentGame(newGame[0]));
    handlerClear();
  },[games,dispatch]);

  const ListButonsFilter = useCallback(() =>
  games.map((game: { id: number; color: string; type: string }) => (
    <Button
      typeStyle="filter"
      key={game.id}
      color={game.color}
      handleClick={handleGame.bind(null, game.id)}
      selected={game.id === currentGame.id}
      title={game.type}
    />        
  )),[games,currentGame]);

  useEffect(()=>{   
   const loadGames =async ()=>{
      setIsLoading(true)
      await dispatch(actions.fetchGameList())
      setIsLoading(false)
    } 
    loadGames()
  },[])

  useEffect(()=>{
    dispatch(actions.initializeCart())
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
          <Button typeStyle="normal" color="2" title="Add to cart" handleClick={handlerAddToCar}/>
        </Container>
      {modalIsOpen ?
      <ModalComponent isVisible={modalIsOpen} onClose={()=>setModalIsOpen(false)}>
        {ListButonsFilter()}        
      </ModalComponent>:
      <></>}
      </>}
  </Container>
  );
};

export const screenOptions = (navData:any) => ({
  headerTitle: ()=> <Title color="white">New Game</Title>,     
  headerRight: () => {
    const totalItemCart = useSelector((state:rootStateType)=>state.cartGame.cartGame).cart.length        
    return (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}        
          onPress={() => {
            navData.navigation.navigate({"name":"CartGame"});
          }}
        >{totalItemCart>0 && totalItemCart}</Item>
      </HeaderButtons>
    )
  },
})
export default NewGameScreen;
