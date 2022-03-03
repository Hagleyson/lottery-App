import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Input,
  Link,
  Loader,
  Title,
} from "@Components/index";

import {
  LoginInitialValues,
  LoginValidations,
} from "./InitialValuesAndValidation";

import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import{actions} from "@store/index"
import { getSession } from "@shared/index";


const AutenticationScreen:FC = (props:any) => {
  const dispatch =useDispatch()
  const [isLoading,setIsLoading]=useState(false)

  const formik = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LoginValidations,
    onSubmit: async (values) => {      
      dispatch(actions.login(values.email,values.password))            
    },
  })


  const handleRercovery = () => {
    props.navigation.navigate("RecoveryScreen");
  };

  const handleSignUp = () => {
    props.navigation.navigate("Register");
  };  
  useEffect(()=>{
    const hasToken =async()=>{
      setIsLoading(true)
      const token = await getSession()   
      if(token) dispatch(actions.auth(token)) 
      setIsLoading(false)
    }
    hasToken()
  },[])

  return (
    <Container type="initial">
      {isLoading ?
      <Loader/>:
      <>
       
        <Title fontsize="40" centered>Authentication</Title>
        <Card>
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
            left          
            handleClick={formik.handleSubmit}
          />
        </Card>
        <Button left title="Sign Up" typeStyle="large" handleClick={handleSignUp} />
      </>
      }
     
    </Container>
  );
};

export default AutenticationScreen;
