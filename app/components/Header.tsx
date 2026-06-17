"use client";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import TopInfoBanner from "./TopInfoBanner";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <>
      <TopInfoBanner />
      <header className=" flex items-center justify-between ">
        <Link href="/">
          <span className="font-bold">ShopIo.</span>
        </Link>
        <Link href="/about">About</Link>
        {isSignedIn && <UserButton></UserButton>}
      </header>
    </>
  );
}
