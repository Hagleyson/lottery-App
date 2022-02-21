import React, { FC } from "react";
import { ContainerStyle } from "./ContainerStyle";

type prospType ={
  type?:string
}
const Container: FC<prospType> = (props) => {
  return <ContainerStyle type={props.type}>{props.children}</ContainerStyle>;
};

export default Container;
