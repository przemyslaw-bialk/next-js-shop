import { getAllProducts } from "@/app/services/product.services";
import DeleteProduct from "../../components/DeleteProduct";
import ProductList from "../../components/ProductList";

const ProductsPage = async () => {
  const products = await getAllProducts();
  return (
    <div>
      <h1 className="font-semibold">PRODUCTS PAGE</h1>
      {products.map((product) => (
        <div key={product._id} className="flex justify-between p-2 ">
          <ProductList product={product} />
          <DeleteProduct id={product._id.toString()} />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
