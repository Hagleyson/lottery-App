import React from "react";
import { Text } from "react-native";
import { InputStyle, InputContainer } from "./InputStyle";

type propsType = {
  input?: {};
  error?: string | null;
};

const Input = (props: propsType) => {
  return (
    <InputContainer>
      {props.error ? <Text>{props.error}</Text> : null}
      <InputStyle /*error={!!props.error}*/ {...props.input} />
    </InputContainer>
  );
};
export default Input;
