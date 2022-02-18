import React from "react";
import {
  Button,
  Card,
  Container,
  Input,
  Link,
  Title,
} from "../../../components/index";
import { useFormik } from "formik";
import {
  RecoveryInitialValue,
  RecoveryValidations,
} from "./InitialValuesAndValidation";

const RecoveryScreen = (props: any) => {
  const formik = useFormik({
    initialValues: RecoveryInitialValue,
    validationSchema: RecoveryValidations,
    onSubmit: async (values, formikBag) => {
      console.log(values);
    },
  });

  const handleRedirect = () => {
    props.navigation.navigate("Autentication");
  };

  return (
    <Container>
      <Title fontsize="40">Reset password</Title>
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

export default RecoveryScreen;
