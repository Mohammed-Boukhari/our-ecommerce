import { z as zod } from "zod";

const regexp: RegExp = /.*[!@#$%^&*()_+{}|[\]\\:";<>?,./].*/;

const signUpSchema = zod
  .object({
    firstName: zod
      .string()
      .min(2, { message: "First name is required " })
      .max(50),
    lastName: zod
      .string()
      .min(2, { message: "Last name is required " })
      .max(50),
    email: zod
      .string()
      .min(2, { message: "Email address is required " })
      .max(50)
      .email(),
    password: zod
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .max(50)
      .regex(regexp, {
        message: "Password should contain at lest 1 special character",
      }),
    confirmPassword: zod
      .string()
      .min(8, { message: "Confirm Password is required" })
      .max(27),
  })

  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password should match",
    path: ["confirmPassword"],
  });

type TSignUpType = zod.infer<typeof signUpSchema>;

export { signUpSchema, type TSignUpType };
