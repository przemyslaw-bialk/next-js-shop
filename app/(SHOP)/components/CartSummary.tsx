import { useAppSelector } from "@/app/store/hooks";

const CartSummary = () => {
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return (
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
  );
};

export default CartSummary;
