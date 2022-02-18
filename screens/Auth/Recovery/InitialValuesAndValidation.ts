import * as yup from "yup";

export const RecoveryInitialValue = {
  email: "",
};
export const RecoveryValidations = yup.object({
  email: yup
    .string()
    .email("Digite um E-mail válido!")
    .required("Email é Obrigatório!"),
});
