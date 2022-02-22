import React, {  useState } from "react";
import {  FlatList, Platform} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Title,Container,HeaderButton as CustomHeaderButton,ModalComponent,CardGame, Button } from "../../components";

const games =[
  {id:1,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  },
  {id:2,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  },
  {id:3,numbers:[1, 2, 3,4,5,6,7,255,24,2,3,4,343,4],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  },
  {id:11,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  },
  {id:21,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  },
  {id:31,numbers:[1, 2, 3,4,5,6,7,255,24,2,3,4,343,4],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  },
  {id:12,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  },
  {id:23,numbers:[1, 2, 3,4,5,6,7],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  },
  {id:34,numbers:[1, 2, 3,4,5,6,7,255,24,2,3,4,343,4],data:"30/11/2021",value:"2,50",game:"Lotofacil",color:"#7F3992"  }
]

const ListGameScreen = (props: any) => {
  const [modalIsOpen,setModalIsOpen]=useState(true)
  return (
     <Container type="list">          
      <Container type="filter">
        <Title type="light" fontsize="20">Filters</Title>    
        <Button icon="md-options-outline" handleClick={()=>setModalIsOpen(true)}/>        
      </Container>
      <Container type="card">
        <FlatList
          data={games}
          keyExtractor={(item:any) => item.id}
          renderItem={(itemData:any) => ( 
          <CardGame
              id={itemData.item.id}
              color={itemData.item.color}
              numbers={itemData.item.numbers}
              isHome
              price={itemData.item.value}
              name={"Hagleyson"}
          />)}
        />
      </Container>
      {modalIsOpen ?<ModalComponent isVisible={modalIsOpen} onClose={()=>setModalIsOpen(false)}/>:<></>}
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
