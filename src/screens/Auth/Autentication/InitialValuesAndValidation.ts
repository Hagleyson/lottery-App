import * as yup from "yup";

export const LoginInitialValues = {
  email: "",
  password: "",
};

export const LoginValidations = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Mandatory email!"),
  password: yup.string().required("Type your password!"),
});
