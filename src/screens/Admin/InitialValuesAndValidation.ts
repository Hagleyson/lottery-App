import * as yup from "yup";

export const AccountInitialValue = {
  email: "",
  name: "",
};

export const AccountValidations = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Mandatory email!"),
  name: yup.string().required("Type your name!"),
});
