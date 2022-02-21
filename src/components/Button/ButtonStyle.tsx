import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

type propsType = {
  typeStyle?: string;
  color?: string;
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
`;
