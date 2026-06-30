"use client";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import TopInfoBanner from "../(SHOP)/components/TopInfoBanner";
import UserProfile from "../(SHOP)/components/UserProfile";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <>
      <TopInfoBanner />
      <header className=" flex items-center justify-between relative ">
        <Link href="/">
          <span className="font-bold text-xl tracking-tight">ShopIo.</span>
        </Link>
        <Link href="/about">About</Link>
        <UserProfile />
        {isSignedIn && <UserButton></UserButton>}
      </header>
    </>
  );
}
