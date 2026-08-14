"use client";

import { Product } from "@/app/types/products";
import { useState } from "react";

type ProductProp = {
  product: Product;
};

const ProductSizes = ({ product }: ProductProp) => {
  const [chosenSize, setChosenSize] = useState<string | null>(null);

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-3">
        <p className="text-sm font-semibold">Size:</p>

        <span className="text-sm ">{chosenSize || "Select"}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {product.sizes?.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setChosenSize(size)}
            className={`h-10 min-w-10 px-3 rounded-sm border text-sm font-medium transition
              ${
                chosenSize === size
                  ? "bg-primary text-white border-primary"
                  : "border-neutral-200 hover:border-neutral-400"
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
