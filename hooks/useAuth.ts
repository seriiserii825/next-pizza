import { useSession } from "next-auth/react";

export default function useAuth() {
  const { data: session, status } = useSession();
  return {
    isAuthenticated: status === "authenticated",
    session,
  };
}
