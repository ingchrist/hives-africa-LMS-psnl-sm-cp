import * as Joi from "joi";

// Define a type for the validation result
interface ValidationResult<T> {
  errors?: Array<{ field: string; message: string }>;
  value?: T;
}

// Create a closure to hold the schema
const validator =
  <T>(schema: Joi.ObjectSchema) =>
  async (payload: T): Promise<ValidationResult<T>> => {
    const validateData = await schema.validate(payload, { abortEarly: false });

    if (validateData.error) {
      const errors = validateData.error.details.map((error) => ({
        field: error.context?.key || "unknown", // Use optional chaining for safety
        message: error.message,
      }));

      return { errors };
    }

    return { value: validateData.value as T }; // Cast the value to type T
  };

export { validator, Joi };
