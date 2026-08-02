import { FaRegHeart } from "react-icons/fa6";

const AddToWishListButton = () => {
  return (
    <button className="border border-neutral-200 rounded-sm px-3 py-1 flex items-center justify-center gap-4 mt-3 w-full">
      <FaRegHeart />
      <span>Add to wishlist</span>
    </button>
  );
};

export default AddToWishListButton;
