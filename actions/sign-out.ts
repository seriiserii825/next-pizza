import { signOut } from "@/auth";

export default async function signOutFunc() {
  try {
    const result = await signOut({ redirect: false });
    return result;
  } catch (error) {
    console.error("Error sign out in:", error);
    throw error;
  }
}
