import styled from "styled-components/native";

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
  ${(props:propsType)=>!props.isHome&&`
    padding:0;
  `}
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
type contentCardType={
  isHome?:boolean;
}
export const ContentCard = styled.View`  
  
  ${(props:contentCardType)=> props.isHome ?`
   width: 100%;  
   height: 100% ;
   justify-content: space-between;
  `:`
    width: 80%;  
    height:60%; 
    justify-content: center;
  `}
`