import React, { useCallback, useEffect, useState } from "react";
import {  Alert, FlatList} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Title,Container,CardGame, Button, Loader } from "../../components";
import { convertToReal, itemListType, msgInfo } from "../../shared/index";
import { postGamesMade } from "../../shared/";
import { actions, rootStateType } from "../../store";



const CartGameScreen = (props:any) => {
  const {min_cart_value,types} = useSelector((state:rootStateType)=>state.gameList.list)    
  const {cart,totalCart} = useSelector((state:rootStateType)=>state.cartGame.cartGame) 
  
  const [isLoading,setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    setIsLoading(true)
    const loadGames =async ()=>{       
       await dispatch(actions.fetchGameList())       
     } 
    setIsLoading(false)
     loadGames()
   },[])

   const handleDeleteItemToCart = useCallback((id: number, price: number)=>{
    Alert.alert(
      "Warning",
      "Do you want to delete this game?",
      [{
          text: "Yes",
          onPress: () => dispatch(actions.removeGameCart(id,price)),
          style: "cancel"
        },
        { text: "No"}
      ]
    );     
   },[cart])

   const handleSave = useCallback(
    async () => {
      if (totalCart < min_cart_value) {
        msgInfo(
          `The minimum purchase price is: ${convertToReal(
            min_cart_value
          )}. Lack ${convertToReal(min_cart_value - totalCart)}`
        );
        return;
      } else {
        const value = cart.map((c: any) => ({
          game_id: c.game_id,
          numbers: c.numbers,
        }));
       const response = await postGamesMade({games:value})        
       if(response){
         props.navigation.push("ListGame")
         dispatch(actions.clearCart())
         
       }
      }
    },[totalCart,min_cart_value])
   
  return (
    <Container type="first" padding={0}>   
    
      { isLoading?
     <Loader/>:               
      cart.length === 0 ? 
      <Container type="first">
        <Title>Empty cart!</Title>
      </Container>
      :
        <FlatList
        data={cart}            
        renderItem={(itemData:itemListType) =>{
            const game = types.filter((type:any)=> (type.id  === itemData.item.game_id))[0]                        
            return <CardGame
                id={itemData.item.id}
                color={game.color}
                numbers={itemData.item.numbers}                
                price={itemData.item.price}
                name={game.type}
                onDelete={()=>handleDeleteItemToCart(itemData.item.id,itemData.item.price)}
            />
        }}
      /> 
      }
                 
      <Container type="textCart">
        <Title >CART <Title type="light">TOTAL: {convertToReal(totalCart)}</Title></Title>                
        
      </Container>      
      <Button title="Save" left typeStyle="save" color="green" handleClick={handleSave}/>
    </Container>   
  );
};


export const screenOptions = () => ({
  headerTitle: ()=> <Title color="white">CART</Title>,   
  
})
  

export default CartGameScreen;
