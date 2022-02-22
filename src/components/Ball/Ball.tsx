import React, { FC } from "react";
import  Title  from "../Title/Title";
import { BallStyle } from "./BallStyle";

type propsType={
    number:string
}
const Ball:FC<propsType> =(props)=>{
    return <BallStyle>
        <Title type="ball">{props.number}</Title>
    </BallStyle>
}

export default Ball