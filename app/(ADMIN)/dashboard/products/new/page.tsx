import { createProductAction } from "@/app/actions/products";
import { getCategories } from "@/app/services/category.service";

const NewProductPage = async () => {
  const categories = await getCategories();
  return (
    <div className="min-h-screen p-6 ">
      <div className="mx-auto max-w-lg rounded-2xl border border-neutral-200 bg-white/70 p-6 backdrop-blur-xl">
        <h1 className="mb-6 text-lg font-semibold text-zinc-800">
          Create Product
        </h1>

        <form action={createProductAction} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700">Name</label>
            <input
              name="name"
              placeholder="e.g. shoes"
              required
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-zinc-800 outline-none transition focus:border-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700">Stock</label>
            <input
              name="stock"
              placeholder="10"
              type="number"
              required
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-zinc-800 outline-none transition focus:border-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700">Price</label>
            <input
              name="price"
              placeholder="0.00"
              type="number"
              required
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-zinc-800 outline-none transition focus:border-zinc-400"
            />
          </div>
          <select name="category">
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="mt-2 rounded-xl bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 cursor-pointer"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProductPage;
