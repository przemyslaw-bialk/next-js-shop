"use client";

import { useRouter } from "next/navigation";

const Unauthorized = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-50">
      <p className="font-bold uppercase">Unauthorized!</p>
      <button
        onClick={() => router.push("/")}
        className="bg-green-300 px-4 py-1 text-sm hover:cursor-pointer hover:bg-green-400"
      >
        GO HOME
      </button>
    </div>
  );
};

export default Unauthorized;
