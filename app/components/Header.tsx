"use client";

import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import UserProfile from "../(SHOP)/components/UserProfile";
import SearchBar from "../(SHOP)/components/SearchBar";
import { FaRegHeart } from "react-icons/fa6";
import ShoppingCartIcon from "../(SHOP)/components/ShoppingCartIcon";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="group">
            <span className="font-display text-3xl font-bold tracking-tight transition group-hover:text-primary">
              ShopIo.
            </span>
          </Link>

          <div className="mx-8 flex-1 max-w-xl">
            <SearchBar />
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/wishlist"
              className="rounded-full p-2 text-xl transition hover:bg-neutral-100 hover:text-primary"
            >
              <FaRegHeart />
            </Link>
            <ShoppingCartIcon />

            <UserProfile />

            {isSignedIn && (
              <div className="rounded-full border border-neutral-200 p-1">
                <UserButton />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
