"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const DisplayPathname = () => {
  const pathname = usePathname();

  const clientPathname = pathname.split("/");

  return (
    <div className="flex items-center gap-1">
      <Link href="/" className="text-gray-50">
        Home
      </Link>

      {clientPathname.map((path, index) => (
        <Link key={index} href={path} className="flex items-center gap-1">
          {index > 0 && <MdOutlineArrowRightAlt />}
          {path}
        </Link>
      ))}
    </div>
  );
};

export default DisplayPathname;
