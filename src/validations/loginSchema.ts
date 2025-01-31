import { z as zod } from "zod";

const regexp: RegExp = /.*[!@#$%^&*()_+{}|[\]\\:";<>?,./].*/;

const LoginSchema = zod.object({
  email: zod
    .string()
    .min(2, { message: "Email address is required " })
    .max(27)
    .email(),
  password: zod
    .string()
    .min(8, { message: "Password must be at least 8 characters longs" })
    .max(27)
    .regex(regexp, {
      message: "Password should contain at lest 1 special character",
    }),
});

type TLoginSchema = zod.infer<typeof LoginSchema>;

export { LoginSchema, type TLoginSchema };
