import { useAppSelector } from "@/app/store/hooks";
import ClearCart from "./ClearCart";

const CartHeader = () => {
  const items = useAppSelector((state) => state.cart.items);

  const itemQuantity = items.length;

  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Your shopping cart
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          {itemQuantity === 1 ? "product:" : "products:"} {itemQuantity}
        </p>
      </div>
      {itemQuantity > 0 && <ClearCart />}
    </div>
  );
};

export default CartHeader;
