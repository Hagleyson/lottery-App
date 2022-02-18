import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

export const ContainerStyle = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.background};
  padding: 25px;
`;
