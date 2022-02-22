import * as yup from "yup";

export const RegisterInitialValues = {
  user: "",
  email: "",
  password: "",
};

export const RegisterValidations = yup.object({
  user: yup.string().required("User is required!"),
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Mandatory email!"),
  password: yup.string().required("Type your password!"),
});
