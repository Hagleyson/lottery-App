import React, { FC } from "react";

import { HeaderButton } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../GlobalStyle";

const CustomHeaderButton:FC<any> = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={theme.white}
    />
  );
};

export default CustomHeaderButton;