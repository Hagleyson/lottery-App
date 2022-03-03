import * as yup from "yup";

export const RecoveryInitialValue = {
  email: "",
  password:""
};
export const emailValidation = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Mandatory email!"),
});

export const passwordValidation= yup.object({
  password: yup
    .string()        
});