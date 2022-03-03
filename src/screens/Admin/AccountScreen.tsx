import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Title,Container,HeaderButton as CustomHeaderButton, Card, Input, Button, Loader } from "@Components/index";
import { useFormik } from "formik";
import { AccountInitialValue, AccountValidations } from "./InitialValuesAndValidation";
import { updateUser,getDataUser } from "@shared/index";

const AcountScreen = (props: any) => {
  const [isLoading,setIsLoading]=useState(false)
  const formik = useFormik({
    initialValues: AccountInitialValue,
    validationSchema: AccountValidations,
    onSubmit: async (values) => {
      const response = await updateUser(values)
      if(response)props.navigation.navigate("ListGame");
    },
  });
  
  
  useEffect(() => {
    const getData = async ()=>{
      setIsLoading(true)
      const userData = await getDataUser();     
      formik.setFieldValue("name", userData.name);
      formik.setFieldValue("email", userData.email);       
      setIsLoading(false)
    }      
    getData()    
  }, []);

  if(isLoading){
    return <Loader/>
  }
  return <Container>
  <Title fontsize="40" centered>Update</Title>
  <Card>
    <Input
        input={{
          onChangeText: formik.handleChange("name"),
          onBlur: formik.handleBlur("name"),
          value: formik.values.name,        
          placeholder: "name",
        }}
      />
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
        title="Update User"
        typeStyle="large"
        color="green"
        handleClick={formik.handleSubmit}
      />
  </Card>  
</Container>
};

export const screenOptions = (navData:any) => ({
  headerTitle: ()=> <Title color="white">Account</Title>, 
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
      <Item
        title="Menu"
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),   
})

export default AcountScreen;
