"use client";
import AdminMenu from "./AdminMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenuFold2Fill, RiCloseLargeFill } from "react-icons/ri";

const AdminSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const linkBase =
    "group flex items-center gap-5 rounded-2xl px-4 py-3 text-sm transition";

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="fixed top-0 left-0 z-10 w-full bg-white px-2 pt-1 text-left md:hidden"
      >
        <RiMenuFold2Fill size={30} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-0 z-120 min-h-screen border-r border-neutral-200 bg-white transition-transform duration-300 md:static md:w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="px-3 py-1">
          <ul className="space-y-2">
            <ul className="space-y-2">
              <li className="block md:hidden mt-3 ml-3">
                <button onClick={toggleMenu}>
                  <RiCloseLargeFill />
                </button>
              </li>

              <AdminMenu
                pathname={pathname}
                linkBase={linkBase}
                handleLinkClick={handleLinkClick}
              />
            </ul>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default AdminSidebar;
