import { Product } from "@/app/types/products";
import RateProduct from "./RateProduct";
import ProductAvailabiltyBadge from "./ProductAvailabilityBadge";

type ProductProp = {
  product: Product;
};

const ProductInfo = ({ product }: ProductProp) => {
  return (
    <div className="w-1/2">
      <h1 className="font-display text-2xl">{product.name}</h1>
      <RateProduct />
      <p className="mt-4 font-bold">{product.price.toFixed(2)}</p>
      <ProductAvailabiltyBadge product={product} />
    </div>
  );
};

export default ProductInfo;
