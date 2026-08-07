"use client";
import { useAppSelector } from "@/app/store/hooks";

const CartPage = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Cart page</h1>

      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price} zł</p>
          <p>Ilość: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
