import { z } from "zod";
export const authSchemaLogin = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const authSchemaRegister = z.object({
  fullName: z.string().min(4, "Full Name must be at least 4 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
