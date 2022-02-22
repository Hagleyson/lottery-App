import React from "react"
import { TouchableOpacity, View } from "react-native";
import {  Title } from ".."
import { CardGamesStyle, Line } from "./CardGameStyle"
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../GlobalStyle";

import { convertToReal } from "../../shared";

type propsType={
    color?: string;
    isHome?: boolean;
    numbers: number[];
    price: number;
    name?: string;
    id: number;
    onDelete?: (id: number, price: number) => void;
}
const CardGame =(props:propsType)=>{
  const formattedNumbers = props.numbers.map((n) => (n < 10 ? `0${n}` : `${n}`));
    return  <CardGamesStyle /*color={props.color} isHome={isHome}*/>
   
    {!props.isHome ? (
      <TouchableOpacity onPress={() => (props.onDelete ? props.onDelete(props.id, props.price) : () => {})}>
        <Ionicons name="md-trash-outline" size={30} color={theme.textPrimary} />
      </TouchableOpacity>
    ) : null}

    <Line color={props.color}/>

    <View style={{width:"100%",height:"100%",justifyContent:"space-between"}}>      
      <Title fontsize={`${props.isHome ? "20" : "15"}`}>
        {formattedNumbers.join(", ")}
      </Title>
      {props.isHome ? <Title type="light">{`20/01/2022 - (${"R$ 2,50"})`}</Title> : null}
      <Title fontsize={`${props.isHome ? "20" : "17"}`}  color={props.color}>
        {props.name}
        {!props.isHome ? <Title type="light">{convertToReal(props.price)}</Title> : null}
      </Title>
    </View>

  </CardGamesStyle>
}

export default CardGame