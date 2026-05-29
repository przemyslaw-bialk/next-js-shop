import Link from "next/link";
import { RxPanelLeftMinimized } from "react-icons/rx";
import { FiBox } from "react-icons/fi";

const AdminSidebar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-1 bg-neutral-50 min-h-screen p-3">
        <li>
          <Link href="/dashboard" className="group flex items-center gap-1 ">
            <RxPanelLeftMinimized className="text-black group-hover:text-accent transition" />
            <span className="block">dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/products"
            className="flex items-center gap-1 group "
          >
            <FiBox className="text-black group-hover:text-accent transition" />
            <span className="block ">products</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/products/new"
            className="flex items-center gap-1 group "
          >
            <FiBox className="text-black group-hover:text-accent transition" />
            <span className="block ">add</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
