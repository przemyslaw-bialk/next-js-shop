import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "./components/footer/Footer";

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </>
  );
};

export default ShopLayout;
