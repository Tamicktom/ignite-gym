//* Libraries imports
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";

//* Local imports
import { apiRoute } from "@utils/contants";
import { safeParse } from "@utils/safeParse";
import { apiErrorSchema } from "@schemas/apiResponse";

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
  const body = JSON.stringify({ email, password, name });
  const url = apiRoute("/users");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  if (response.status === 201) {
    return;
  } else {
    const data = await response.json();
    const parsedResponse = await safeParse(apiErrorSchema, data);
    if (parsedResponse.success) {
      throw new Error(parsedResponse.data.message);
    } else {
      console.log(parsedResponse.errors);
      throw new Error(parsedResponse.errors[0]);
    }
  }
}

export function useSignUp() {
  return useMutation({
    mutationFn: signUp,
  });
}
