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
import { resetPassword } from "../../../shared";

const RecoveryScreen = (props: any) => {
  const formik = useFormik({
    initialValues: RecoveryInitialValue,
    validationSchema: RecoveryValidations,
    onSubmit: async (values) => {
     const response = await resetPassword(values.email)
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
      <Title fontsize="40" centered>Reset password</Title>
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
          error={formik.errors.email && formik.touched.email ?formik.errors.email:null}
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
