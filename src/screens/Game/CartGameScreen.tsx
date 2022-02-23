import React, {  useState } from "react";
import {  FlatList, Platform} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Title,Container,HeaderButton as CustomHeaderButton,ModalComponent,CardGame, Button } from "../../components";
import { convertToReal } from "../../shared";

const games =[
  {id:1,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  },
  {id:2,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  },
  {id:3,numbers:[1, 2, 3,4,5,6,7,255,24,2,3,4,343,4],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  },
  {id:11,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  },
  {id:21,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  },
  {id:31,numbers:[1, 2, 3,4,5,6,7,255,24,2,3,4,343,4],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  },
  {id:12,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  },
  {id:23,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  },
  {id:34,numbers:[1, 2, 3,4,5,6,7,255,24,2,3,4,343,4],data:"30/11/2021",value:2.50,game:"Lotofacil",color:"#7F3992"  }
]

const CartGameScreen = (props: any) => {
  
  return (
    <Container type="first" padding={0}>                  
          <FlatList
            data={games}
            keyExtractor={(item:any) => item.id}
            renderItem={(itemData:any) => ( 
            <CardGame
                id={itemData.item.id}
                color={itemData.item.color}
                numbers={itemData.item.numbers}                
                price={itemData.item.value}
                name={"Hagleyson"}
            />)}
          />        
      <Container type="textCart">
        <Title >CART <Title type="light">TOTAL: {convertToReal(1000)}</Title></Title>                  
      </Container>      
      <Button title="Save" typeStyle="save" color="green" handleClick={()=>{}}/>
    </Container>   
  );
};


export const screenOptions = (navData:any) => ({
  headerTitle: ()=> <Title color="white">CART</Title>,   
})
  

export default CartGameScreen;
