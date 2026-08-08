import { clearCart } from "@/app/features/cart/cartSlice";
import { useAppDispatch } from "@/app/store/hooks";

const ClearCart = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(clearCart());
      }}
    >
      clear cart
    </button>
  );
};

export default ClearCart;
