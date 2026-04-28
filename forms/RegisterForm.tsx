"use client";

import InputField from "@/components/UI/InputField";
import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="p-8 bg-white shadow-2xl rounded-3xl shadow-orange-100/80">
      <form className="space-y-5">
        <InputField
          id="name"
          label="Full name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <InputField
          id="email_field"
          label="Email"
          type="email"
          placeholder="test@mail.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <InputField
          id="password_field"
          label="Password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <InputField
          id="confirm-password"
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />

        <button
          type="submit"
          className="w-full py-3 font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 active:scale-[0.98] transition-all shadow-lg shadow-orange-200"
        >
          Create account
        </button>
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
