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
    props.typeStyle === "home" &&
    ` width: 100%;
      padding: 15px;
      border-radius: 100px;
      margin-top: 30px;
      background-color: ${theme.greenLemon};
    `}

  ${(props: propsType) =>
    props.typeStyle === "large" &&
    `width: 100%;
     background-color: transparent;    
     margin-top: 10px;      
     padding:30px;
  `};
`;

export const TextButton = styled.Text`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-style: italic;

  ${(props: propsType) =>
    props.typeStyle === "home" &&
    `
    font-size:35px;
    color:${theme.white}
    `}

  ${(props: propsType) =>
    props.typeStyle === "large" &&
    ` font-size: 35px;
      color:${theme.textPrimary}      
  `}

  ${(props: propsType) =>
    props.color === "green" && `color:${theme.greenLemon}`}
`;
