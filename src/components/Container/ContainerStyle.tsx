import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

type containertype={
  type?:string
}
export const ContainerStyle = styled.View`
  flex: 1;
  justify-content: center;    
  padding: 15px;
  position: relative;
  background-color: ${theme.background};
  
  ${(props:containertype)=>props.type ==="list" &&`
  justify-content: flex-start;  
  `}
  
  ${(props:containertype)=>props.type ==="filter"&&`    
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
  `}
  ${(props:containertype)=>props.type === "modalHeader" && `
    width: 100%;    
    padding:10px;   
    position:absolute;
    elevation:15;     
    justify-content: space-between;  
    align-items: center;  
    flex-direction: row
    margin-bottom:40px;
      

  `}
  
  
  
`;
