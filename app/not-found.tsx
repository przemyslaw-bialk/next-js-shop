import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 m-auto items-center">
      <div>404 - PAGE NOT FOUND</div>
      <Link
        href="/"
        className="bg-green-300 hover:bg-green-400 px-4 py-1 rounded-2xl"
      >
        go home
      </Link>
    </div>
  );
};

export default NotFound;
