import React from "react";

import { ContainerButton, TextButton } from "./ButtonStyle";
import { TouchableOpacity } from "react-native";
type propsType = {
  typeStyle?: string;
  color?: string;
  title: string;
  handleClick: () => void;
};

const Button = (props: propsType) => {
  return (
    <TouchableOpacity onPress={props.handleClick}>
      <ContainerButton typeStyle={props.typeStyle}>
        <TextButton typeStyle={props.typeStyle} color={props.color}>
          {props.title}
        </TextButton>
      </ContainerButton>
    </TouchableOpacity>
  );
};

export default Button;
