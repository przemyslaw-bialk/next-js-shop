import Link from "next/link";

export default function Header() {
  return (
    <header className=" flex items-center justify-between ">
      <Link href="/">
        <span className="font-bold">ShopIo.</span>
      </Link>
      <Link href="/about">About</Link>
    </header>
  );
}
