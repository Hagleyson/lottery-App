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
   ${(props:propsType)=> props.typeStyle ==="normal" && `
     padding:10px 10px;
     border-width: 2px;          
     border-radius:10px;         
     border-color:  ${theme.greenLight};
     ${props.color === "2" && `
       background-color:${theme.greenLight}       
     `}
  `} 
  ${(props:propsType)=>props.typeStyle==="icon" &&`
    padding:20px;
  `}

  ${(props:propsType)=> props.typeStyle === "save" &&`
     width: 100%;
     background-color: transparent;        
     padding:25px;
     border-top-width: 2px;     
     border-color:${theme.line}
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
  ${(props:propsType)=>props.typeStyle === "normal" &&`
    font-style:normal;
    color:${props.color === "2" ?theme.white:theme.greenLight};    
  `} 
  ${(props:propsType)=> props.typeStyle === "save" &&`
     color:${theme.greenBold}
     font-size:40px
  `}
  
`;
