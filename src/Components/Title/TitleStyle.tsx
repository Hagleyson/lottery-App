import styled from "styled-components/native";
import { theme } from "../../globalStyle/theme";

type propsType = {
  fontsize?: string;
  color?: string;
  type?: string;
  centered?:boolean
};

export const TitleStyle = styled.Text` 
  font-weight: bold;
  font-style: italic;  
  font-size: ${(props: propsType) => props.fontsize || 25}px;
  color: ${(props: propsType) => props.color || theme.textPrimary};
  text-align: left;    
  padding-right: 5px;
  
  
  ${(props:propsType)=>props.centered&& `text-align:center`}  

  ${(props: propsType) =>
    props.type === "special"
      && `
      width:200px;
      margin:40px auto;
      background-color: ${theme.greenLemon};
      padding:10px ;
      color:${theme.white};
      border-radius: 50px;
  `}

  ${(props:propsType)=>props.type ==="light"&&`    
    font-weight: normal;     
  `}
  ${(props:propsType)=>props.type ==="description"&&`    
    margin-top:20px;  
  `}
  ${(props:propsType)=>props.type === "ball" && `
    font-style: normal;  
    color:${theme.white}
    text-align:center;
  `}
  ${(props:propsType)=>props.type === "erroInput" && `
    font-size:14px;
    color:${theme.error}
  `}
  ${(props:propsType)=>props.type === "textValueCart" &&`
    position: absolute;
    width: 29px;
    top:-16px;
    padding:0;
    right: 0px;
    font-size:14px;        
    text-align: center; 
    color:${theme.white}
  `}
 
`;
