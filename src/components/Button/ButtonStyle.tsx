import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

type propsType = {
  typeStyle?: string;
  color?: string;
  selected?:boolean;
};

export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
  ; 

  ${(props: propsType) =>
    props.typeStyle === "large" &&
    `width: 100%;
     background-color: transparent; 
     margin-top: 5px;      
     padding:10px;
  `};
   
  ${(props:propsType)=> props.typeStyle ==="filter" && `
     padding:10px 5px;
     border-width: 4px;     
     width:50%;
     border-radius:40px;    
     margin:15px auto;
     border-color: ${ props.color|| theme.background};
     ${props.selected && `
       background-color:${props.color}
     `}
  `}

  

     
`;

export const TextButton = styled.Text`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-style: italic;

  ${(props: propsType) =>
    props.typeStyle === "large" &&
    ` font-size: 35px;
      color:${theme.textPrimary}      
  `}

  ${(props: propsType) =>
    props.color === "green" && `color:${theme.greenLemon}`}

  ${(props:propsType)=> props.typeStyle === "filter" &&`
    color: ${props.selected ? theme.white:props.color};
    font-size:20px;    
  `}
 
`;
