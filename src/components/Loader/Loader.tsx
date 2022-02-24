import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "../../GlobalStyle";


const Loader =()=>{
    return <ActivityIndicator size="large" color={theme.greenBold}/>
}

export default Loader