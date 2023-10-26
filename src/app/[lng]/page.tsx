import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const dict = await getDictionary(lng);
  return (
    <main>
      <h1 className="text-orange-400 text-3xl">{dict.greetings}</h1>
      <div>
        <Image
          alt={"next.js"}
          src="/static/next.svg"
          width={100}
          height={100}
        ></Image>
      </div>
      <div>
        <Link href="/users">Users Link</Link>
      </div>
    </main>
  );
}
