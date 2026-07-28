import { Product } from "@/app/types/products";
import { IoMdCheckmark } from "react-icons/io";

type ProductProp = {
  product: Product;
};

const ProductAvailabiltyBadge = ({ product }: ProductProp) => {
  const stock = product.stock;

  return (
    <div className="flex gap-2">
      {stock > 0 ? (
        <div className="text-green-500 font-semibold text-xs flex items-center gap-0.5">
          <IoMdCheckmark />
          <span>available</span>
        </div>
      ) : (
        <p>brak</p>
      )}
      {stock < 5 && (
        <p className="text-red-500 font-semibold text-xs">
          Only {stock}pc left!
        </p>
      )}
    </div>
  );
};

export default ProductAvailabiltyBadge;
