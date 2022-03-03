import React, { FC } from "react";
import { ContainerStyle } from "./ContainerStyle";

type prospType ={
  type?:string
  padding?:number;
}
const Container: FC<prospType> = (props) => {  
  return <ContainerStyle padding={props.padding} type={props.type}>{props.children}</ContainerStyle>;
};

export default Container;
