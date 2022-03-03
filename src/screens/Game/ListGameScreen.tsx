import React, {  useCallback, useEffect, useState } from "react";
import {  FlatList, Platform} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { Title,Container,HeaderButton as CustomHeaderButton,ModalComponent,CardGame, Button, Loader } from "@Components/index";
import { listGamesMade } from "@shared/index";
import { actions, rootStateType } from "@store/index";


const ListGameScreen = () => {
  const {types} = useSelector((state:rootStateType)=>state.gameList.list)  
  const [modalIsOpen,setModalIsOpen]=useState(false)
  const [listGames,setListGames]=useState([])
  const [selectedFilters, setSelectedFilters]=useState<string[]>([])  
  const [isLoading,setIsLoading]=useState(false)
  
  const dispatch =useDispatch()

  const fetchListGame = async (filter:string[])=>{       
    const response = await listGamesMade(filter)       
    if(response){
      setListGames(response)
    }    
  } 

  const handlerFilter = useCallback(
    (type: string) => {      
      let newFilter = selectedFilters;
      const idx = newFilter.indexOf(type);
      idx > -1 ? newFilter.splice(idx, 1) : newFilter.push(type);
      setSelectedFilters(newFilter);      
      fetchListGame(newFilter)
    },
    [selectedFilters]
  );

  useEffect(()=>{        
     const loadGame =async()=>{
      setIsLoading(true) 
      await dispatch(actions.fetchGameList())
      await fetchListGame([])
      setIsLoading(false)
    }      
    loadGame()    
  },[])
  
  if(isLoading){
    return <Loader/>
  }
  const showModal =()=>{    
    setModalIsOpen(true)
  }
  return (
    <Container type="first">          
        <Container type="filter">
          <Title type="light" fontsize="20">Filters</Title>    
          <Button icon="md-options-outline" handleClick={showModal}/>        
        </Container>  
        <Container type="card">
          {listGames.length <=0 ? 
          <Title centered>{selectedFilters.length > 0 ?"You don't have a game for the filter(s)":"You don't have a game"}</Title> 
          :<FlatList
            data={listGames}            
            renderItem={(itemData:any) => {              
              const game = types.filter((type:any)=> (+type.id  === +itemData.item.type.id))[0]                 
              return<CardGame
              id={itemData.item.id}
              color={game.color || "#000000"}
              numbers={itemData.item.choosen_numbers}
              isHome
              price={itemData.item.value}
              name={itemData.item.type.type}
              />}}
          />
        }
        </Container>
        
      {modalIsOpen ?<ModalComponent isVisible={modalIsOpen} onClose={()=>setModalIsOpen(false)}>
        {types.map((game:any)=>{          
          const isActive = selectedFilters.indexOf(game.type) >= 0;
          return<Button typeStyle="filter" 
          color={game.color}
          key={game.id}
          handleClick={handlerFilter.bind(null, game.type)}
          selected={isActive}
          title={game.type}/>})
        }
      </ModalComponent>:<></>}
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
  headerBackVisible:false
})
  

export default ListGameScreen;
