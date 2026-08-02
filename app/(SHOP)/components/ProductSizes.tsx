"use client";
import { Product } from "@/app/types/products";
import { useState } from "react";

type ProductProp = {
  product: Product;
};

const ProductSizes = ({ product }: ProductProp) => {
  const [chosenSize, setChosenSize] = useState<string | null>(null);

  return (
    <div>
      <p className="font-semibold mt-2">size: {chosenSize}</p>
      <div className="flex gap-2 items-center my-2">
        {product.sizes?.map((size) => (
          <span
            key={size}
            className={`text-primary border border-neutral-200 p-2 text-xs hover:bg-primary hover:text-white cursor-pointer rounded-sm ${chosenSize === size && "bg-primary text-white"}`}
            onClick={() => setChosenSize(size)}
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProductSizes;
