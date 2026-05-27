import { auth } from "@clerk/nextjs/server";
import { authorizeAdmin } from "../actions/user";
import Unauthorized from "../components/Unauthorized";

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
    <div>
      <p>ADMIN PANEL HERE</p>
      {children}
    </div>
  );
};

export default DashboardLayout;
