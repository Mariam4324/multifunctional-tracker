import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "name must be at least 2 characters long").max(40, "Name must be less than 40 characters"),
    email: z.string().email("invalid email address"),
    password: z.string().min(8, "password must have at least 8 chars").max(25, "Password must be less than 25 chars"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password must match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("invalid email address"),
  password: z.string().min(8, "password must have at least 8 chars").max(25, "Password must be less than 25 chars"),
});

export const surveySchema = z.object({
  survey: z.string().nonempty("please, choose an option"),
});

export type registerTypes = z.infer<typeof registerSchema>;
export type loginTypes = z.infer<typeof loginSchema>;
export type surveyTypes = z.infer<typeof surveySchema>;
