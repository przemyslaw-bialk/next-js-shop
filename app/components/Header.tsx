"use client";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import TopInfoBanner from "../(SHOP)/components/TopInfoBanner";
import UserProfile from "../(SHOP)/components/UserProfile";
import SearchBar from "../(SHOP)/components/SearchBar";
import { FaRegHeart } from "react-icons/fa6";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <>
      <TopInfoBanner />
      <header className=" flex items-center justify-between relative py-2 ">
        <Link href="/">
          <span className="font-bold text-xl tracking-tight">ShopIo.</span>
        </Link>
        <SearchBar />

        <Link href="/wishlist">
          <FaRegHeart />
        </Link>

        <UserProfile />
        {isSignedIn && <UserButton></UserButton>}
      </header>
    </>
  );
}
