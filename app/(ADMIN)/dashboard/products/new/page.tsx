import { createProductAction } from "@/app/actions/products";

const NewProductPage = () => {
  return (
    <div>
      <h1 className="mb-2">Create Product</h1>
      <form action={createProductAction}>
        <div className=" gap-1 flex flex-col">
          <label htmlFor="price" className="text-sm font-bold">
            name:
          </label>
          <input
            name="name"
            placeholder="e.g. shoes"
            required
            className="border p-1 text-sm"
          />
          <label htmlFor="stock" className="text-sm font-bold">
            stock:
          </label>
          <input
            name="stock"
            placeholder="10"
            type="number"
            required
            className="border p-1 text-sm"
          />
          <label htmlFor="price" className="text-sm font-bold">
            price:
          </label>
          <input
            name="price"
            placeholder="0.00"
            type="number"
            required
            className="border p-1 text-sm"
          />
          <button
            type="submit"
            className="bg-neutral-950 text-secondary p-2 hover:bg-neutral-900 cursor-pointer"
          >
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductPage;
