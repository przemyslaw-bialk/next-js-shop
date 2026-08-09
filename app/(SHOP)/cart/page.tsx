"use client";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  decreaseItemQuantityInCart,
  increaseItemQuantityInCart,
  removeItemFromCart,
} from "@/app/features/cart/cartSlice";
import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import CartHeader from "../components/CartHeader";

const CartPage = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="w-full max-w-7xl px-4 py-10">
      <CartHeader />

      {items.length === 0 ? (
        <div className="flex min-h-100 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-neutral-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              Add some products to your cart.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Products */}
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 rounded-md border border-neutral-200 bg-white p-4"
              >
                {/* Image */}
                <Image
                  src={item.image || "/defaultProductImage.png"}
                  alt={item.name}
                  height={50}
                  width={50}
                />

                {/* Product info */}
                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-semibold text-neutral-900">
                    {item.name}
                  </h2>

                  {item.size && (
                    <p className="mt-1 text-sm text-neutral-500">
                      Size: {item.size}
                    </p>
                  )}

                  <p className="mt-2 text-sm font-medium text-neutral-700">
                    {item.price.toFixed(2)} USD
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center rounded-sm border border-neutral-200">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(decreaseItemQuantityInCart({ id: item.id }))
                    }
                    className="flex h-9 w-9 items-center justify-center text-neutral-500 transition hover:text-black"
                  >
                    <FiMinus size={14} />
                  </button>

                  <span className="w-8 text-center text-sm font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      dispatch(increaseItemQuantityInCart({ id: item.id }))
                    }
                    disabled={item.quantity >= item.stock}
                    className="flex h-9 w-9 items-center justify-center text-neutral-500 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>

                {/* Total */}
                <div className="hidden w-24 text-right sm:block">
                  <p className="font-semibold">
                    {(item.price * item.quantity).toFixed(2)} USD
                  </p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-neutral-400 transition hover:bg-red-50 hover:text-red-500"
                >
                  <FiTrash2 size={17} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit rounded-md border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Order summary</h2>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-neutral-500">
                <span>Subtotal</span>
                <span>{totalPrice.toFixed(2)} USD</span>
              </div>

              <div className="flex justify-between text-neutral-500">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="my-4 border-t border-neutral-200" />

              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>{totalPrice.toFixed(2)} USD</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-sm bg-black py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
