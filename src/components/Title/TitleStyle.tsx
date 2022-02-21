import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

type propsType = {
  fontsize?: string;
  color?: string;
  type?: string;
};

export const TitleStyle = styled.Text`
  font-weight: bold;
  font-style: italic;
  font-size: ${(props: propsType) => props.fontsize || 25}px;
  color: ${(props: propsType) => props.color || theme.textPrimary};
  text-align: center;

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
    padding: 0px 1px;    
    font-weight: normal;
  `}
`;
