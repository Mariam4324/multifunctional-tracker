import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long").max(40, "Name must be less than 40 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must have at least 8 characters").max(25, "Password must be less than 25 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password must match",
    path: ["confirmPassword"],
  });

export type ValidationTypes = z.infer<typeof schema>;


