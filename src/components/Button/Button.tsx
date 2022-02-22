import React from "react";

import { ContainerButton, TextButton } from "./ButtonStyle";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../GlobalStyle";

type propsType = {
  typeStyle?: string;
  color?: string;
  title?: string;
  handleClick: () => void;
  selected?:boolean;
  icon?:any;
};

const Button = (props: propsType) => {
  return (
    <TouchableOpacity onPress={props.handleClick}>
      <ContainerButton typeStyle={props.typeStyle} selected={props.selected} color={props.color}>
        
        {props.title && <TextButton typeStyle={props.typeStyle} selected={props.selected} color={props.color}>
          {props.title}          
        </TextButton>}
          {props.icon && <Ionicons name={props.icon} size={30} color={theme.textPrimary}/> }
      </ContainerButton>
    </TouchableOpacity>
  );
};

export default Button;
