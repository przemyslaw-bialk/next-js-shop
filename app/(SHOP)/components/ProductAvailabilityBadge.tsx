import { Product } from "@/app/types/products";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

type ProductProp = {
  product: Product;
};

const ProductAvailabilityBadge = ({ product }: ProductProp) => {
  const stock = product.stock;

  return (
    <div className="flex items-center gap-5 border-b border-neutral-200 py-4">
      {stock > 0 ? (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
            <IoMdCheckmark />
          </span>
          <span>In stock</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-red-500">
          <IoCloseCircleOutline />
          <span>Currently unavailable</span>
        </div>
      )}

      {stock > 0 && stock < 5 && (
        <p className="text-xs font-semibold text-red-500">Only {stock} left!</p>
      )}
    </div>
  );
};

export default ProductAvailabilityBadge;
