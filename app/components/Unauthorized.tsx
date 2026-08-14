"use client";

import { useRouter } from "next/navigation";

const Unauthorized = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-50 px-4">
      <div className="flex max-w-md flex-col items-center rounded-xl border border-neutral-200 bg-white px-8 py-10 text-center shadow-sm">
        <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          Error 401
        </span>

        <h1 className="mb-2 text-2xl font-semibold text-primary">
          Unauthorized
        </h1>

        <p className="mb-6 max-w-sm text-sm leading-relaxed text-neutral-400">
          You do not have permission to access this page. Please sign in or
          return to the homepage.
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Go home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
