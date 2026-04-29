"use server";
import { signIn } from "@/auth";

export default async function signInWithCredentials(email: string, password: string) {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirection after sign-in
    });
    return result;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}
