//* Libraries imports
import * as yup from "yup";

export const apiStatusSchema = yup
  .string()
  .oneOf(["success", "error"])
  .required();

export const apiErrorSchema = yup.object({
  message: yup.string().required(),
  status: apiStatusSchema,
});
