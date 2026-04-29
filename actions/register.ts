"use server";

import { prisma } from "@/lib/prisma";
import saltAndHashPassword from "@/utils/saltAndHashPassword";

export async function registerUser(data: { name: string; email: string; password: string }) {
  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) {
    return { error: "Email already in use" };
  }

  const hashedPassword = await saltAndHashPassword(data.password);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });

  return { success: true, userId: user.id };
}
