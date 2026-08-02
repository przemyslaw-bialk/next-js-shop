"use client";
import Button from "@/app/components/Button";
import { IoCartOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { Product } from "@/app/types/products";

type ProductProp = {
  product: Product;
};

const AddToCart = ({ product }: ProductProp) => {
  const [qtn, setQtn] = useState(1);

  return (
    <div className="flex gap-2">
      <div className="border border-neutral-200 rounded-sm flex items-center justify-center gap-2 px-4">
        <FiMinus
          className="cursor-pointer"
          onClick={() => setQtn((prev) => (prev > 1 ? prev - 1 : 1))}
        />
        <input
          type="number"
          value={qtn}
          onChange={(e) => {
            const value = Number(e.target.value);
            setQtn(Math.min(value, product.stock));
          }}
          step={1}
          className="w-10 font-semibold text-center text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
        />
        <FiPlus
          className="cursor-pointer"
          onClick={() => setQtn((prev) => Math.min(prev + 1, product.stock))}
        />
      </div>
      <Button
        type="button"
        className="flex items-center justify-center gap-4 w-full rounded-sm"
      >
        <IoCartOutline />
        <span>Add to cart</span>
      </Button>
    </div>
  );
};

export default AddToCart;
