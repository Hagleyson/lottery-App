import React from "react";
import {
  Button,
  Card,
  Container,
  Input,
  Title,
} from "../../../components/index";
import { useFormik } from "formik";
import {
  RegisterInitialValues,
  RegisterValidations,
} from "./InitialValuesAndValidation";

const RegisterScreen = (props: any) => {
  const formik = useFormik({
    initialValues: RegisterInitialValues,
    validationSchema: RegisterValidations,
    onSubmit: async (values, formikBag) => {
      console.log(values);
    },
  });

  const handleRedirect = () => {
    props.navigation.navigate("Autentication");
  };

  return (
    <Container>
      <Title fontsize="40" centered>Registration</Title>
      <Card>
        <Input
          input={{
            onChangeText: formik.handleChange("user"),
            onBlur: formik.handleBlur("user"),
            value: formik.values.user,
            autoFocus: true,
            placeholder: "Name",
          }}
        />
        <Input
          input={{
            onChangeText: formik.handleChange("email"),
            onBlur: formik.handleBlur("email"),
            value: formik.values.email,
            autoComplete: "email",
            placeholder: "Email",
          }}
        />
        <Input
          input={{
            onChangeText: formik.handleChange("password"),
            onBlur: formik.handleBlur("password"),
            value: formik.values.password,
            placeholder: "Password",
          }}
        />
        <Button
          title="Send link"
          typeStyle="large"
          color="green"
          handleClick={formik.handleSubmit}
        />
      </Card>
      <Button title="Back" typeStyle="large" handleClick={handleRedirect} />
    </Container>
  );
};

export default RegisterScreen;
