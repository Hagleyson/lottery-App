import React from "react";
import { ContainerStyle } from "./ContainerStyle";

const Container = (props: any) => {
  return <ContainerStyle>{props.children}</ContainerStyle>;
};

export default Container;
