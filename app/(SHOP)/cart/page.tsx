"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import ClearCart from "../components/ClearCart";
import {
  decreaseItemQuantityInCart,
  increaseItemQuantityInCart,
  removeItemFromCart,
} from "@/app/features/cart/cartSlice";

const CartPage = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Cart page</h1>

      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price} zł</p>
          <p>Ilość: {item.quantity}</p>
          <button
            onClick={() =>
              dispatch(increaseItemQuantityInCart({ id: item.id }))
            }
          >
            increase
          </button>
          <button
            onClick={() =>
              dispatch(decreaseItemQuantityInCart({ id: item.id }))
            }
          >
            decrease
          </button>
          <button onClick={() => dispatch(removeItemFromCart({ id: item.id }))}>
            REMOVE FROM CART
          </button>
        </div>
      ))}

      <ClearCart />
    </div>
  );
};

export default CartPage;
