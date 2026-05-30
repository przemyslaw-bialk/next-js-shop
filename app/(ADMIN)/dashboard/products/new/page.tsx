import { createProductAction } from "@/app/actions/products";

const NewProductPage = () => {
  return (
    <div>
      <h1>Create Product</h1>
      <form action={createProductAction}>
        <input name="name" placeholder="product name" required />
        <input name="stock" placeholder="stock" type="number" required />
        <input name="price" placeholder="price" type="number" required />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewProductPage;
