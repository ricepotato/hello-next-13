import Link from "next/link";
import { getDictionary } from "../dictionaries";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const dict = await getDictionary(lng);
  return (
    <main>
      <h1 className="text-lime-400 text-3xl">hello this is {dict.server}</h1>
      <div>locale : {lng}</div>
      <div className="p-2">
        <Link href="/">Home Link</Link>
      </div>
      <div className="p-2">
        <button>{dict.click}</button>
      </div>
    </main>
  );
}
