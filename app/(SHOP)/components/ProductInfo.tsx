import { Product } from "@/app/types/products";
import RateProduct from "./RateProduct";
import ProductAvailabiltyBadge from "./ProductAvailabilityBadge";
import ProductSizes from "./ProductSizes";
import AddToCart from "./AddToCart";
import AddToWishListButton from "./AddToWishlistButton";
import SizeTable from "./SizeTable";
import ShippingInfo from "./ShippingInfo";

type ProductProp = {
  product: Product;
};

const ProductInfo = ({ product }: ProductProp) => {
  return (
    <div className="w-1/2">
      <h1 className="font-display text-5xl">{product.name}</h1>
      <RateProduct />
      <p className="mt-4 text-2xl font-semibold tracking-tight">
        ${product.price.toFixed(2)}
      </p>
      <ProductAvailabiltyBadge product={product} />
      <ProductSizes product={product} />
      <SizeTable />
      <AddToCart product={product} />
      <AddToWishListButton />
      <ShippingInfo />
    </div>
  );
};

export default ProductInfo;
