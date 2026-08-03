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

  return await addToWishlist(userId, productId);
};

export const getWishlistAction = async () => {
  const { userId } = await auth();

  if (!userId) {
    return [];
  }

  const wishlist = await getWishlist(userId);

  return JSON.parse(JSON.stringify(wishlist));
};
