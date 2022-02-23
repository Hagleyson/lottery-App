import React from "react"
import   Title  from "../Title/Title"
import  Button  from "../Button/Button";
import { CardGamesStyle, ContentCard, Line } from "./CardGameStyle"

import { convertToReal } from "../../shared";


type propsType={
    color?: string;
    isHome?: boolean;
    numbers: number[];
    price: number;
    name?: string;
    id: number;
    onDelete?: (id: number, price: number) => void;
}
const CardGame =(props:propsType)=>{
  const formattedNumbers = props.numbers.map((n) => (n < 10 ? `0${n}` : `${n}`));
    return  <CardGamesStyle isHome>
   
    {!props.isHome ? (
      <Button typeStyle="icon" icon="md-trash-outline" handleClick={() => (props.onDelete ? props.onDelete(props.id, props.price) : () => {})}/> 
    ) : null}
    
    <Line color={props.color}/>

    <ContentCard isHome={props.isHome} >      
      <Title fontsize="20">
        {formattedNumbers.join(", ")}
      </Title>
      {props.isHome ? <Title type="light" fontsize="17">{`20/01/2022 - (${"R$ 2,50"})`}</Title> : null}
      <Title fontsize= "20"  color={props.color}>
        {`${props.name} `}
        {!props.isHome ? <Title type="light" fontsize="20">{convertToReal(props.price)}</Title> : null}
      </Title>
    </ContentCard>

  </CardGamesStyle>
}

export default CardGame