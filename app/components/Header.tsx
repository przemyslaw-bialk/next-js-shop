"use client";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className=" flex items-center justify-between ">
      <Link href="/">
        <span className="font-bold">ShopIo.</span>
      </Link>
      <Link href="/about">About</Link>
      {isSignedIn && <UserButton></UserButton>}
    </header>
  );
}
