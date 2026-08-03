"use server";

import { auth } from "@clerk/nextjs/server";
import { addToWishlist, getWishlist } from "@/app/services/user.service";

export const addToWishlistAction = async (productId: string) => {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "Not authenticated",
    };
  }

  try {
    await addToWishlist(userId, productId);

    return {
      success: true,
      message: "Product added to wishlist",
    };
  } catch (err) {
    console.log(err);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const getWishlistAction = async () => {
  const { userId } = await auth();

  if (!userId) {
    return [];
  }

  const wishlist = await getWishlist(userId);

  return JSON.parse(JSON.stringify(wishlist));
};
