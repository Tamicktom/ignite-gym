import * as yup from "yup";

type ValidationResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      errors: string[];
    };

export async function safeParse<T>(
  schema: yup.AnyObjectSchema,
  data: T
): Promise<ValidationResult<T>> {
  try {
    const validatedData = await schema.validate(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof yup.ValidationError)
      return { success: false, errors: error.errors || [error.message] };
    else throw error;
  }
}
