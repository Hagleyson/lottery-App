import React from "react";
import {
  Button,
  Card,
  Container,
  Input,
  Link,
  Title,
} from "../../../components/index";

import {
  LoginInitialValues,
  LoginValidations,
} from "./InitialValuesAndValidation";

import { useFormik } from "formik";

const AutenticationScreen = (props: any) => {
  const formik = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LoginValidations,
    onSubmit: async (values, formikBag) => {
      console.log(values);
    },
  });

  const handleRercovery = () => {
    props.navigation.navigate("RecoveryScreen");
  };

  const handleSignUp = () => {
    props.navigation.navigate("Register");
  };
  return (
    <Container type="initial">
      <Title fontsize="40" centered>Authentication</Title>
      <Card>
        <Input
          input={{
            onChangeText: formik.handleChange("email"),
            onBlur: formik.handleBlur("email"),
            value: formik.values.email,
            autoComplete: "email",
            autoFocus: true,
            placeholder: "Email",
          }}
        />
        <Input
          input={{
            onChangeText: formik.handleChange("password"),
            onBlur: formik.handleBlur("password"),
            value: formik.values.password,
            secureTextEntry: true,
            placeholder: "Password",
          }}
        />
        <Link handleClick={handleRercovery}>I forget my password</Link>
        <Button
          title="Log In"
          typeStyle="large"
          color="green"
          handleClick={formik.handleSubmit}
        />
      </Card>
      <Button title="Sign Up" typeStyle="large" handleClick={handleSignUp} />
    </Container>
  );
};

export default AutenticationScreen;
