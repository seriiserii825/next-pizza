"use client";

import Button from "@/components/UI/Button";
import InputField from "@/components/UI/InputField";
import { registerUser } from "@/actions/auth";
import { useFormState } from "@/hooks/useFormState";
import { z } from "zod";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const { formData, errors, handleChange, validate } = useFormState<RegisterFormData>(
    { name: "", email: "", password: "", confirmPassword: "" },
    registerSchema,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    console.log("Valid data:", data);
    const result = await registerUser({ name: data.name, email: data.email, password: data.password });
    if (result.error) {
      console.error(result.error);
    } else {
      console.log("User created:", result.userId);
    }
  };

  return (
    <div className="p-8 bg-white shadow-2xl rounded-3xl shadow-orange-100/80">
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          id="name"
          label="Full name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange("name")}
          error={errors.name}
          autoComplete="off"
        />

        <InputField
          id="email_field"
          label="Email"
          type="email"
          placeholder="test@mail.com"
          value={formData.email}
          onChange={handleChange("email")}
          error={errors.email}
          autoComplete="new-email"
        />

        <InputField
          id="password_field"
          label="Password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange("password")}
          error={errors.password}
          autoComplete="new-password"
        />

        <InputField
          id="confirm-password"
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange("confirmPassword")}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

        <Button type="submit">Create account</Button>
      </form>

      <p className="mt-6 text-sm text-center text-stone-500">
        Already have an account?{" "}
        <a href="/auth/login" className="font-semibold text-orange-600 hover:text-orange-700">
          Sign in
        </a>
      </p>
    </div>
  );
}
