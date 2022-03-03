import styled from "styled-components/native";
import { theme } from "../../globalStyle/theme";

export const LinkStyle = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  margin-top: 15px;
  color: ${theme.textLight};
  border: none;

  text-decoration: none;
`;
