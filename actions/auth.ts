"use server";

import { prisma } from "@/lib/prisma";

export async function registerUser(data: { name: string; email: string; password: string }) {
  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) {
    return { error: "Email already in use" };
  }

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  return { success: true, userId: user.id };
}
