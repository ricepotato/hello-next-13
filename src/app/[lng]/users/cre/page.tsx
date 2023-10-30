import Link from "next/link";

export default function Users() {
  const createUser = async (formData: FormData) => {
    "use server";

    console.log(formData);
  };

  return (
    <main>
      <h1>hello next users cre!</h1>
      <Link href="/">Home Link</Link>
    </main>
  );
}
