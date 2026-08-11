"use client";

import { useAppSelector } from "@/app/store/hooks";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const ShoppingCartIcon = () => {
  const items = useAppSelector((state) => state.cart.items);

  const itemQuantityInShoppingCart = items.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0,
  );

  return (
    <Link
      href="/cart"
      className="relative rounded-full p-2 text-xl transition hover:bg-neutral-100 hover:text-primary"
    >
      <IoCartOutline />

      <span className="absolute right-0 top-0 h-4 w-4  text-xs">
        {itemQuantityInShoppingCart === 0 ? "" : itemQuantityInShoppingCart}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
