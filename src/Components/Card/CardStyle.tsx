import styled from "styled-components/native";
import { theme } from "../../globalStyle/theme";

const CardStyle = styled.View`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border-width: 4px;
  border-color: ${theme.line};
  border-style: solid;
  border-width: 2px;
`;
export default CardStyle;
