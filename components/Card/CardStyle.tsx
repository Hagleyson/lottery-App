import styled from "styled-components/native";
import { theme } from "../../GlobalStyle/theme";

const CardStyle = styled.View`
  width: 100%;
  height: auto;
  padding: 30px;
  box-shadow: ${theme["box-shadow-cards"]};
  background-color: ${theme.error};
`;
export default CardStyle;
