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
  RecoveryInitialValue,emailValidation,passwordValidation
  
} from "./InitialValuesAndValidation";
import { resetPassword } from "@shared/index";
import { useState } from "react";

const RecoveryScreen = (props: any) => {
  const [token,setToken]=useState("")  
  const formik = useFormik({
    initialValues: RecoveryInitialValue,
    validationSchema: token?passwordValidation:emailValidation,        
    onSubmit: async (values) => {      
      if(!token){
        const response = await resetPassword("",values.email)
        console.log("entrou token")
        if(response){
          setToken(response.token)

         formik.setFieldValue("email","")

        }
      }
     if(token){       
      
      if(!values.password)     {
        formik.setFieldError("password","mandatory password")
        return;
      }
      const response = await resetPassword(token,values.password) 
      if(response){
        setToken("")
        props.navigation.navigate("Autentication")
      }
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
       {token?
        <Input
        input={{
          onChangeText: formik.handleChange("password"),
          onBlur: formik.handleBlur("password"),
          value: formik.values.password,               
          placeholder: "password",
          secureTextEntry: true,
        }}
        error={formik.errors.password && formik.touched.password ?formik.errors.password:null}
      />:
       <Input
          input={{
            onChangeText: formik.handleChange("email"),
            onBlur: formik.handleBlur("email"),
            value: formik.values.email,
            autoComplete: "email",            
            placeholder: "Email",
          }}
          error={formik.errors.email && formik.touched.email ?formik.errors.email:null}
        />}
        <Button
          title="Send link"
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

export default RecoveryScreen;
