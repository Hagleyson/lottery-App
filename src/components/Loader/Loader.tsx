import React from "react";
import { ActivityIndicator } from "react-native";
import  Container  from "../Container/Contaneir";
import { theme } from "../../GlobalStyle";


const Loader =()=>{
    return <Container type="initial">
                <ActivityIndicator size="large" color={theme.greenBold}/>
        </Container>
}

export default Loader