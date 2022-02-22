import React from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Title,Container,HeaderButton as CustomHeaderButton, Card, Input, Button } from "../../components";
import { useFormik } from "formik";
import { AccountInitialValue, AccountValidations } from "./InitialValuesAndValidation";

const AcountScreen = (props: any) => {
  const formik = useFormik({
    initialValues: AccountInitialValue,
    validationSchema: AccountValidations,
    onSubmit: async (values, formikBag) => {
      console.log(values);
    },
  });
  const handleSignUp = () => {
    props.navigation.navigate("Register");
  };
  return <Container>
  <Title fontsize="40">Update</Title>
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
