import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  console.log(cookieStore);
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  return Response.json({ message: "Hello world" });
}
