import { z as zod } from "zod";

const LoginSchema = zod.object({
  email: zod
    .string()
    .min(2, { message: "Email address is required " })
    .max(40)
    .email(),
  password: zod.string().max(30),
});

type TLoginSchema = zod.infer<typeof LoginSchema>;

export { LoginSchema, type TLoginSchema };
