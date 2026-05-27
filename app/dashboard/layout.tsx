import { auth } from "@clerk/nextjs/server";
import { authorizeAdmin } from "../actions/user";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) {
    return <div>UNAUTHORIZED</div>;
  }
  const admin = await authorizeAdmin(userId);
  if (!admin) {
    return <div>UNAUTHORIZED</div>;
  }
  return (
    <div>
      <p>ADMIN PANEL HERE</p>
      {children}
    </div>
  );
};

export default DashboardLayout;
