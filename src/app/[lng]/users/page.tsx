import Link from "next/link";

export default function Users() {
  const createUser = async (formData: FormData) => {
    "use server";

    console.log(formData);
  };

  return (
    <main>
      <h1>hello next users!</h1>
      <Link href="/">Home Link</Link>
      <form action={createUser}>
        <input type="text" name="name" />
        <button type="submit">submit</button>
      </form>
    </main>
  );
}
