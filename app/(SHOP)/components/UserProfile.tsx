import { FiUser } from "react-icons/fi";

import Link from "next/link";
import { useState } from "react";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <FiUser
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-accent transition duration-300 cursor-pointer"
      />
      <div
        className={`absolute top-0 right-0 z-50 bg-white
    transition duration-300 ease-in-out  shadow-lg p-2
    ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 "}`}
      >
        <div className="flex flex-col gap-3">
          <FiUser
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-accent"
          />
          <div className="flex items-center justify-center gap-3 min-h-12">
            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className="text-sm bg-primary text-secondary px-3 py-1 rounded-md hover:text-primary hover:bg-secondary hover:border"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setIsOpen(false)}
              className="text-sm bg-primary text-secondary px-3 py-1  rounded-md hover:text-primary hover:bg-secondary hover:border"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
