import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  await logout();
}

async function logout() {
  const nextAuthCookieNames = [
    "next-auth.session-token",
    "next-auth.csrf-token",
    "next-auth.callback-url",
  ];
  nextAuthCookieNames.forEach((name) => {
    cookies().delete(name);
  });
  redirect("/");
}
