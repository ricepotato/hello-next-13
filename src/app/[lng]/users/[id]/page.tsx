"use client";

import Link from "next/link";
import { useState } from "react";

export default function User({ params }: { params: { id: string } }) {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>hello next user</h1>
      <div>id: {params.id}</div>
      <div>count : {count} </div>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
    </main>
  );
}
