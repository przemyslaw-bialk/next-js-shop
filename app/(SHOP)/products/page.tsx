import { getProductsByCategory } from "@/app/services/product.services";
const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) => {
  const { category } = await searchParams;

  if (!category) return;
  const products = await getProductsByCategory(category);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id.toString()}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductsPage;
