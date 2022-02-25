import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

type containertype={
  type?:string,
  padding?:number
}
export const ContainerStyle = styled.View` 
  padding: ${(props)=> props.padding !== undefined ?props.padding:15}px;
  position: relative;
  background-color: ${theme.background};
  ${(props:containertype)=>props.type === "initial" &&`
    flex:1;
    justify-content: center;   
  `}

  ${(props:containertype)=>props.type ==="first" &&`
    justify-content: flex-start;      
    flex:1;    
  `}
  
  ${(props:containertype)=>props.type ==="filter" &&`    
    width: 108%;    
    padding:10px 27px;   
    position:absolute;
    elevation:15;     
    justify-content: space-between;  
    flex-direction: row
  `}

  ${(props:containertype)=>props.type === "card" &&`
    margin-top: 40px;
    padding:10px 0px;  
    flex:1;
  `}

  ${(props:containertype)=>props.type === "header" && `
    width: 100%;    
    padding:10px;   
    position:absolute;
    elevation:15;     
    justify-content: space-between;  
    align-items: center;  
    flex-direction: row
    margin-bottom:40px;    
  `}
  
  ${(props:containertype)=>props.type === "text" && `
    margin-top:30px;
    justify-content: flex-start;      
    padding:15px 4px;    
  `}
  ${(props:containertype)=>props.type === "textCart" && `    
    justify-content: flex-start;      
    padding:15px 10px;    
  `}

  ${(props:containertype)=>props.type === "game" && `    
    width: 100%; 
    height:100%;
    flex-wrap: wrap;    
    flex-direction: row;        
    justify-content: space-between;
  `}
  ${(props:containertype)=>props.type === "containerButtons" &&`
    flex-direction: row;  
    justify-content: space-between;
  `}
  
  
`;
