import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { cookies } from "next/headers";

export default async function Login({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const session = await getServerSession(authOptions);
  const csrfToken = cookies().get("next-auth.csrf-token")?.value.split("|")[0];
  return (
    <main>
      <h1>Custom Login</h1>
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" value={csrfToken} />
        <label>
          Username
          <input name="username" type="text" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
      <div>
        {session?.user ? (
          <p>
            you logged in as {session?.user?.name}({session?.user?.email})
          </p>
        ) : null}
      </div>
    </main>
  );
}
