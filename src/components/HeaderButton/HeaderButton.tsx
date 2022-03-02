import React, { FC } from "react";

import { HeaderButton } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../GlobalStyle";

import  Container  from "../Container/Contaneir";
import  Title  from "../Title/Title";

const CustomHeaderButton:FC<any> = (props) => {
  return (
    <Container type="headerButton">
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={theme.white}
    />
   {props.children && <Title type="textValueCart">{props.children}</Title> }
    </Container>
  );
};

export default CustomHeaderButton;