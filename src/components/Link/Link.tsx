import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { LinkStyle, Text } from "./LinkStyle";

type propsType = {
  typeStyle?: string;
  color?: string;
  handleClick?: () => void;
};

const Button: FC<propsType> = (props) => {
  return (
    <TouchableOpacity onPress={props.handleClick}>
      <LinkStyle>
        <Text>{props.children}</Text>
      </LinkStyle>
    </TouchableOpacity>
  );
};

export default Button;
