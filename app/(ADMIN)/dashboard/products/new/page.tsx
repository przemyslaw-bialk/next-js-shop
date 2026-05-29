import { createProductAction } from "@/app/actions/products";

const NewProductPage = () => {
  return (
    <div>
      <h1>Create Product</h1>
      <form action={createProductAction}>
        <input name="name" placeholder="product name" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewProductPage;
