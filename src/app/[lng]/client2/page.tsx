"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Client2PropType {
  params: {
    lng: string;
  };
}

export default function Page({ params: { lng } }: Client2PropType) {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const t = useTranslations("Index");
  return (
    <main>
      <h1>hello next {t("title")}</h1>
      <div>
        counter : {count}{" "}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </main>
  );
}
