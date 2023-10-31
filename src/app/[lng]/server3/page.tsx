export default function Page({ params: { lng } }: { params: { lng: string } }) {
  async function setData(formData) {
    "use server";

    console.log(formData);
  }

  return (
    <main>
      <h1 className="text-lime-400 text-3xl">hello this is server3</h1>
      <form action={setData}>
        <input type="text" name="title" />
        <button type="submit">전송</button>
      </form>
    </main>
  );
}
