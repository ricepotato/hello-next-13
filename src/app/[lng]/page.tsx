import LoginButton from "@/components/loginBtn";
import { getServerSession } from "next-auth/next";
import { cookies } from "next/headers";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const dict = await getDictionary(lng);
  const session = await getServerSession(authOptions);
  const csrfToken = cookies().get("next-auth.csrf-token")?.value.split("|")[0];
  const isLoggedIn = session?.user;
  return (
    <main>
      <h1 className="text-orange-400 text-3xl">{dict.greetings}</h1>
      <div className="p-6">
        <LoginButton isLoggedIn={isLoggedIn} />
      </div>

      <div className="p-2">
        {isLoggedIn ? (
          <p>
            you logged in as {session?.user?.name}({session?.user?.email})
          </p>
        ) : null}
      </div>
    </main>
  );
}
