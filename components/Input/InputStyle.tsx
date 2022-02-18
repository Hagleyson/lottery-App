import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

export const InputContainer = styled.View`
  width: 100%;
`;

type inputProps = {
  error?: boolean;
};
export const InputStyle = styled.TextInput`
  width: 100%;
  padding: 20px 5px;
  border: none;
  text-align: left;
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  color: ${theme.textSecondary};
  border-bottom-width: 2px;
  border-color: ${theme.line};
`;
