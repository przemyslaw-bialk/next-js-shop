import { FaRegHeart } from "react-icons/fa6";

const AddToWishListButton = () => {
  return (
    <button
      className="
        mt-3 w-full flex items-center justify-center gap-3 rounded-sm border border-neutral-200 py-3 text-sm font-semibold transition hover:border-neutral-400 hover:bg-neutral-50
      "
    >
      <FaRegHeart className="text-lg" />
      <span>Add to wishlist</span>
    </button>
  );
};

export default AddToWishListButton;
