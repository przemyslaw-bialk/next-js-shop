import mongoose from "mongoose";
import { getProductsByCategory } from "@/app/services/product.services";
import NotFound from "@/app/not-found";

type Product = {
  name: string;
  stock: number;
  _id: string;
};

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    <NotFound />;
  }

  const products = await getProductsByCategory(categoryId);

  return (
    <div>
      {products.map((product: Product) => (
        <div key={product._id.toString()}>
          {product.name} {product.stock}
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
