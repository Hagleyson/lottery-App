import * as yup from "yup";

export const RecoveryInitialValue = {
  email: "",
};
export const RecoveryValidations = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Mandatory email!"),
});
