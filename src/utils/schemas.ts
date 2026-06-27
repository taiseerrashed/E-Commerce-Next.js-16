import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),

  email: z.string().email("Invalid email address"),

  phone: z.string().min(11, "Phone number is required"),

  address: z.string().min(5, "Address is required"),

  city: z.string().min(2, "City is required"),

  country: z.string().min(2, "Country is required"),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export type TLoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  phone: z.string().min(11, "Phone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rePassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.rePassword, {
  message: "Passwords do not match",
  path: ["rePassword"],
});
export type TRegisterValues = z.infer<typeof registerSchema>;
