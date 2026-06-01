import { auth } from "@clerk/nextjs/server";
import { authorizeAdmin } from "../../services/user.service";
import Unauthorized from "../../components/Unauthorized";
import AdminSidebar from "../components/AdminSidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) {
    return <Unauthorized />;
  }
  const admin = await authorizeAdmin(userId);
  if (!admin) {
    return <Unauthorized />;
  }
  return (
    <div className="flex min-h-screen gap-2 ">
      <AdminSidebar />
      <div className="flex-1 mt-2 md:mt-0">{children}</div>
    </div>
  );
};

export default DashboardLayout;
