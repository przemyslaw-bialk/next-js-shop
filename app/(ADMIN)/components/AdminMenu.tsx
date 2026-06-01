import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { FiBox, FiPlus } from "react-icons/fi";

type AdminMenuProps = {
  pathname: string;
  linkBase: string;
  handleLinkClick: () => void;
};

const AdminMenu = ({ pathname, linkBase, handleLinkClick }: AdminMenuProps) => {
  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: RxDashboard,
    },
    {
      name: "Products",
      href: "/dashboard/products",
      icon: FiBox,
    },
    {
      name: "Add Product",
      href: "/dashboard/products/new",
      icon: FiPlus,
    },
  ];

  return (
    <>
      {menuItems.map(({ name, href, icon: Icon }) => {
        let isActive;

        if (pathname === href) {
          isActive = true;
        } else {
          isActive = false;
        }

        return (
          <li key={href} onClick={handleLinkClick}>
            <Link
              href={href}
              className={`${linkBase} ${
                isActive
                  ? "bg-[#151515] text-secondary"
                  : "text-zinc-800 hover:bg-[#151515] hover:text-secondary"
              }`}
            >
              <Icon
                size={20}
                className={
                  isActive
                    ? "text-secondary"
                    : "text-zinc-600 transition group-hover:text-secondary"
                }
              />
              <span>{name}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default AdminMenu;
