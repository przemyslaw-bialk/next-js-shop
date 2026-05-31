"use client";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { FiBox, FiPlus } from "react-icons/fi";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const currentLink = usePathname();

  const linkBase =
    "group flex items-center gap-5 rounded-2xl px-4 py-3 transition text-sm";
  const activeClass = "bg-[#151515] text-secondary ";
  const inactiveClass = "text-zinc-800 hover:bg-[#151515] hover:text-secondary";

  const iconBase = "text-zinc-600 transition group-hover:text-secondary";
  const iconActive = "text-secondary";

  return (
    <aside className="w-64 min-h-screen border-r border-neutral-200 bg-white/70 backdrop-blur-xl">
      <nav className="py-1 px-3">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className={`${linkBase} ${
                currentLink === "/dashboard" ? activeClass : inactiveClass
              }`}
            >
              <RxDashboard
                size={20}
                className={currentLink === "/dashboard" ? iconActive : iconBase}
              />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/products"
              className={`${linkBase} ${
                currentLink === "/dashboard/products"
                  ? activeClass
                  : inactiveClass
              }`}
            >
              <FiBox
                size={20}
                className={
                  currentLink === "/dashboard/products" ? iconActive : iconBase
                }
              />
              <span>Products</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/products/new"
              className={`${linkBase} ${
                currentLink === "/dashboard/products/new"
                  ? activeClass
                  : inactiveClass
              }`}
            >
              <FiPlus
                size={20}
                className={
                  currentLink === "/dashboard/products/new"
                    ? iconActive
                    : iconBase
                }
              />
              <span>Add Product</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
