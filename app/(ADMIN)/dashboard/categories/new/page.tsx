import { createCategoryAction } from "@/app/actions/categories";

const NewCategoryPage = () => {
  return (
    <div>
      <h1>create category</h1>
      <form action={createCategoryAction}>
        <label>Category</label>
        <input name="name" placeholder="e.g. Man" />
        <button
          type="submit"
          className="mt-2 rounded-xl bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewCategoryPage;
