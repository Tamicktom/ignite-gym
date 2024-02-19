//* Libraries imports
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";

//* Local imports
import { apiRoute } from "@utils/contants";
import { safeParse } from "@utils/safeParse";
import { apiErrorSchema } from "@schemas/apiResponse";

import { api } from "@services/api";

export const signUpSchema = yup
  .object({
    name: yup.string().required("Informe seu nome"),
    email: yup.string().email("E-mail inválido").required("Informe seu e-mail"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Informe sua senha"),
    password_confirmation: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();

export type SignUpProps = yup.InferType<typeof signUpSchema>;

async function signUp({ email, password, name }: SignUpProps) {
  const body = { email, password, name };

  const response = await api.post("/users", body);

  console.log(response.data);
}

export function useSignUp() {
  return useMutation({
    mutationFn: signUp,
  });
}
