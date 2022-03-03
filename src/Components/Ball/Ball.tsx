import React, { FC } from "react";
import  Title  from "../Title/Title";
import { BallStyle } from "./BallStyle";

type propsType={
    number:string
    color?:string
    onClick:()=>void
}
const Ball:FC<propsType> =(props)=>{
    return <BallStyle color={props.color} onPress={props.onClick}>
        <Title type="ball">{props.number}</Title>
    </BallStyle>
}

export default Ball