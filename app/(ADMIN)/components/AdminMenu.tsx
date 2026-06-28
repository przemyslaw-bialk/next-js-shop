import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { FiBox, FiPlus } from "react-icons/fi";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiMegaphoneLine } from "react-icons/ri";

type AdminMenuProps = {
  pathname: string;
  handleLinkClick: () => void;
};

const AdminMenu = ({ pathname, handleLinkClick }: AdminMenuProps) => {
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
    {
      name: "Categories",
      href: "/dashboard/categories",
      icon: AiOutlineFolderAdd,
    },
    {
      name: "Upload Images",
      href: "/dashboard/images",
      icon: IoCloudUploadOutline,
    },
    {
      name: "Marketing",
      href: "/dashboard/marketing",
      icon: RiMegaphoneLine,
    },
  ];

  // styling link
  const linkBase =
    "group flex items-center gap-5 rounded-2xl px-4 py-3 text-sm transition";

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
