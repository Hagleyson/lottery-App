import React, { FC } from "react";
import { ContainerStyle } from "./ContainerStyle";

const Container: FC = (props) => {
  return <ContainerStyle>{props.children}</ContainerStyle>;
};

export default Container;
