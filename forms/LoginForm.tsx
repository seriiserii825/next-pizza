"use client";

import Button from "@/components/UI/Button";
import InputField from "@/components/UI/InputField";
import { useFormState } from "@/hooks/useFormState";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { formData, errors, handleChange, validate } = useFormState<LoginFormData>(
    { email: "", password: "" },
    loginSchema,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    console.log("Valid data:", data);
  };

  return (
    <div className="p-8 bg-white shadow-2xl rounded-3xl shadow-orange-100/80">
      <form onSubmit={handleSubmit} className="space-y-5">
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
        <Button type="submit">Login</Button>
      </form>

      <p className="mt-6 text-sm text-center text-stone-500">
        Don&apos;t have an account?{" "}
        <a href="/auth/register" className="font-semibold text-orange-600 hover:text-orange-700">
          Sign up
        </a>
      </p>
    </div>
  );
}
