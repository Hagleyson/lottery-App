import React from "react";
import {  FlatList} from "react-native";
import { Title,Container,CardGame, Button } from "../../components";
import { convertToReal, itemListType } from "../../shared";
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
type itemType ={
  item:{
    id: number;
    numbers: number[];
    data: string;
    value: number;
    game: string;
    color: string;
  }
}
const CartGameScreen = () => {
  
  return (
    <Container type="first" padding={0}>                  
          <FlatList
            data={games}            
            renderItem={(itemData:itemListType) => ( 
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
      <Button title="Save" left typeStyle="save" color="green" handleClick={()=>{}}/>
    </Container>   
  );
};


export const screenOptions = () => ({
  headerTitle: ()=> <Title color="white">CART</Title>,   
})
  

export default CartGameScreen;
