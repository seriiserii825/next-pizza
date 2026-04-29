import bcrypt from "bcryptjs-react";
export default async function saltAndHashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}
