import styled from "styled-components/native";
import { theme } from "../../globalStyle";
type BallType ={
    color?:string
}
export const BallStyle = styled.TouchableOpacity`
    background-color: ${(props:BallType)=> props.color?props.color:theme.ball};
    justify-content: center;
    align-items: center;    
    border-radius: 28px;
    margin:0 5px 5px 0;
    width: 70px;
    height: 70px;
`
