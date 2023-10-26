"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getDictionary } from "../dictionaries";

interface ClientDictType {
  greetings?: string;
  click?: string;
}

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  const router = useRouter();
  const [count, setCount] = useState(0);

  //const dict = getDictionary().then((dict) => {});

  const [clientDict, setClientDict] = useState<ClientDictType>({});

  useEffect(() => {
    getDictionary(lng).then((dict) => {
      setClientDict(dict);
    });
  }, []);

  console.log(lng);
  return (
    <main>
      <h1>hello next {clientDict.greetings}</h1>
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
