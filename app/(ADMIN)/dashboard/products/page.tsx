import { getAllProducts } from "@/app/services/product.services";
import DeleteProduct from "../../components/DeleteProduct";

const ProductsPage = async () => {
  const products = await getAllProducts();
  return (
    <div className="">
      <h1>PRODUCTS PAGE</h1>
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.name}</p>
          <DeleteProduct id={product._id.toString()} />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
