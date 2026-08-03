"use client";

import { Product } from "@/app/types/products";
import { useEffect, useState } from "react";
import { getWishlistAction } from "@/app/actions/wishlist";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import Loader from "@/app/components/Loader";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      const products = await getWishlistAction();
      setWishlist(products);
      setLoading(false);
    };

    fetchWishlist();
  }, []);

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold mb-8">My Wishlist</h1>

      {loading ? (
        <Loader />
      ) : wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-md border border-neutral-200 py-20">
          <FaRegHeart className="text-4xl text-neutral-300 mb-4" />
          <p className="text-neutral-500">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="group rounded-md border border-neutral-200 bg-white p-4 transition hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-neutral-100">
                <Image
                  src={product.image?.image_url || "/defaultProductImage.png"}
                  alt={product.name}
                  fill
                  className="object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <h2 className="font-semibold text-sm truncate">
                  {product.name}
                </h2>

                <p className="mt-2 font-bold">{product.price.toFixed(2)}$</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
