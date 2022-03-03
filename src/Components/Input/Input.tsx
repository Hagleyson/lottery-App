import React from "react";
import { InputStyle, InputContainer } from "./InputStyle";
import Title from "../Title/Title"
type propsType = {
  input?: {};
  error?: string | null;
};

const Input = (props: propsType) => {
  return (
    <InputContainer>
      
      <InputStyle /*error={!!props.error}*/ {...props.input} />
      {props.error ? <Title type="erroInput" >{props.error}</Title> : null}
    </InputContainer>
  );
};
export default Input;
