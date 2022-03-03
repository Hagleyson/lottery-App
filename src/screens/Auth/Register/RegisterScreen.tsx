import React from "react";

import {
  Button,
  Card,
  Container,
  Input,
  Title,
} from "@Components/index";

import { useFormik } from "formik";

import {
  RegisterInitialValues,
  RegisterValidations,
} from "./InitialValuesAndValidation";
import { createUser } from "@shared/index";

const RegisterScreen = (props: any) => {
  const formik = useFormik({
    initialValues: RegisterInitialValues,
    validationSchema: RegisterValidations,
    onSubmit: async (values) => {
      const response = await createUser(values.user,values.email,values.password)
      if(response){
        props.navigation.navigate("Autentication")
      }

    },
  });

  const handleRedirect = () => {
    props.navigation.navigate("Autentication");
  };

  return (
    <Container type="initial">
      <Title fontsize="40" centered>Registration</Title>
      <Card>
        <Input
          input={{
            onChangeText: formik.handleChange("user"),
            onBlur: formik.handleBlur("user"),
            value: formik.values.user,            
            placeholder: "Name",
          }}
          error={
            formik.errors.user && formik.touched.user
            ?formik.errors.user:null
          }
        />
        <Input
          input={{
            onChangeText: formik.handleChange("email"),
            onBlur: formik.handleBlur("email"),
            value: formik.values.email,
            autoComplete: "email",
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
            placeholder: "Password",
            secureTextEntry: true,
          }}
          error={
            formik.errors.password && formik.touched.password
            ?formik.errors.password:null
          }
        />
        <Button
          title="Register"
          typeStyle="large"
          color="green"
          handleClick={formik.handleSubmit}
          left
        />
      </Card>
      <Button title="Back" right typeStyle="large" handleClick={handleRedirect} />
    </Container>
  );
};

export default RegisterScreen;
