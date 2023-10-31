export default async function CreatePlan() {
  async function createPlanAction(formData) {
    "use server";
  }
  return (
    <main>
      <h1>CreatePlan</h1>
      <div>
        <form action={createPlanAction} method="post">
          <label>Plan Name</label>
          <input type="text" name="name" placeholder="plan name" required />
          <label>Plan Description</label>
          <input
            type="text"
            name="description"
            placeholder="plan description"
          />
          <label htmlFor="dailyApiCall">Daily Api Call</label>
          <input
            type="number"
            name="dailyApiCall"
            placeholder="daily api call"
            required
            defaultValue={500}
          />
          <button type="submit">저장</button>
        </form>
      </div>
    </main>
  );
}
