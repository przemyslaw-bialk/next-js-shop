import { CartItem } from "@/app/features/cart/cartTypes";
import { useAppDispatch } from "@/app/store/hooks";
import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import {
  decreaseItemQuantityInCart,
  increaseItemQuantityInCart,
  removeItemFromCart,
} from "@/app/features/cart/cartSlice";

type ProductProps = {
  item: CartItem;
};

const ProductInfoInShoppingCart = ({ item }: ProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-5 rounded- border border-neutral-200 bg-white p-4">
      <Image
        src={item.image || "/defaultProductImage.png"}
        alt={item.name}
        height={50}
        width={50}
      />
      <div className="min-w-0 flex-1">
        <h2 className="font-semibold text-neutral-900">{item.name}</h2>

        {item.size && (
          <p className="mt-1 text-sm text-neutral-500">Size: {item.size}</p>
        )}

        <p className="mt-2 text-sm font-medium text-neutral-700">
          {item.price.toFixed(2)} USD
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center rounded-sm border border-neutral-200">
        <button
          type="button"
          onClick={() => dispatch(decreaseItemQuantityInCart({ id: item.id }))}
          className="flex h-9 w-9 items-center justify-center text-neutral-500 transition hover:text-black"
        >
          <FiMinus size={14} />
        </button>

        <span className="w-8 text-center text-sm font-semibold">
          {item.quantity}
        </span>

        <button
          type="button"
          onClick={() => dispatch(increaseItemQuantityInCart({ id: item.id }))}
          disabled={item.quantity >= item.stock}
          className="flex h-9 w-9 items-center justify-center text-neutral-500 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
        >
          <FiPlus size={14} />
        </button>
      </div>

      {/* Total */}
      <div className=" text-right sm:block">
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
  );
};

export default ProductInfoInShoppingCart;
