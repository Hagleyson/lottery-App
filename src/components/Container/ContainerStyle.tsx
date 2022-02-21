import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

type containertype={
  type?:string
}
export const ContainerStyle = styled.View`
  flex: 1;

  justify-content: center;
  background-color: ${theme.background};
  padding: 15px;
  position: relative;
  overflow: hidden;  
  
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
  ;
  
`;
