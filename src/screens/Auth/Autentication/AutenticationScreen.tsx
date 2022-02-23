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

import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import{actions} from "../../../store"


const AutenticationScreen = (props: any) => {
  const dispatch =useDispatch()
  const formik = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LoginValidations,
    onSubmit: async (values, formikBag) => {      
      dispatch(actions.login(values.email,values.password))      
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
          error={
            formik.errors.email && formik.touched.email
            ?formik.errors.email:null
          }
        />
        <Input
          input={{
            onChangeText: formik.handleChange("password"),
            onBlur: formik.handleBlur("password"),
            value: formik.values.password,
            secureTextEntry: true,
            placeholder: "Password",
          }}
          error={
            formik.errors.password && formik.touched.password
            ?formik.errors.password:null
          }
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
