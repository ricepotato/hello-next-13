import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  const t = useTranslations("Index");
  return (
    <main>
      <h1 className="text-lime-400 text-3xl">{t("title")}</h1>
      <div>locale : {lng}</div>
      <div className="p-2">
        <Link href="/">Home Link</Link>
      </div>
      <div className="p-2">
        <button>{t("title")}</button>
      </div>
    </main>
  );
}
