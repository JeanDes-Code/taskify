import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: String | null;
  data?: TOutput;
};

/**
 * Creates a safe action function that validates input data against a schema and executes a handler function.
 *
 * @param {z.Schema<TInput>} schema - The schema used to validate the input data.
 * @param {(validatedData: TInput) => Promise<ActionState<TInput, TOutput>>} handler - The handler function that processes the validated data.
 * @returns {Promise<ActionState<TInput, TOutput>>} - A promise that resolves to the action state.
 */
export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
      };
    }

    return handler(validationResult.data);
  };
};
