import styled from "styled-components/native";
import { theme } from "../../GlobalStyle";
type propsType = {
    color?: string;
    isHome?: boolean;
  };

  export const CardGamesStyle = styled.View`
    flex-wrap: wrap; 
    width   :100% ;   
    height: 120px;    
    justify-content: space-evenly;        
    text-align: left;    
    padding: 5px 10px;    

    
  `

  type lineType={
    color?:string
  }
  export const Line = styled.View`
    width: 5px;
    height: 110px;
    margin-right :10px ;    
    border-radius: 10px;
    background-color: ${(props:lineType)=>props.color||"#000000"};
  `
  