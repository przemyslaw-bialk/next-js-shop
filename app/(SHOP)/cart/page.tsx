"use client";

import { useAppSelector } from "@/app/store/hooks";

import CartHeader from "../components/CartHeader";
import EmptyCartInfo from "../components/EmptyCartInfo";
import ProductInfoInShoppingCart from "../components/ProductInfoInShoppingCart";
import CartSummary from "../components/CartSummary";

const CartPage = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="w-full py-10">
      <CartHeader />

      {items.length === 0 ? (
        <EmptyCartInfo />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <ProductInfoInShoppingCart item={item} key={item.id} />
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </div>
  );
};

export default CartPage;
