"use client";

import Button from "@/app/components/Button";
import { IoCartOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { Product } from "@/app/types/products";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/features/cart/cartSlice";

type ProductProp = {
  product: Product;
};

const AddToCart = ({ product }: ProductProp) => {
  const dispatch = useDispatch();
  const [qtn, setQtn] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <FiMinus
          className="cursor-pointer text-neutral-500 transition hover:text-black"
          size={16}
          onClick={() => setQtn((prev) => (prev > 1 ? prev - 1 : 1))}
        />

        <input
          type="number"
          value={qtn}
          onChange={(e) => {
            const value = Number(e.target.value);
            setQtn(Math.min(value, product.stock));
          }}
          className=" w-10 bg-transparent text-center text-sm font-semibold outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
          "
        />

        <FiPlus
          className="cursor-pointer text-neutral-500 transition hover:text-black"
          size={16}
          onClick={() => setQtn((prev) => Math.min(prev + 1, product.stock))}
        />
      </div>

      <Button
        onClick={() =>
          dispatch(
            addToCart({
              id: product._id,
              name: product.name,
              price: product.price,
              image: product.image?.image_url ?? "",
              quantity: qtn,
            }),
          )
        }
        type="button"
        className="flex h-11 w-full items-center justify-center gap-3 rounded-sm font-semibold"
      >
        <IoCartOutline size={20} />
        <span>Add to cart</span>
      </Button>
    </div>
  );
};

export default AddToCart;
