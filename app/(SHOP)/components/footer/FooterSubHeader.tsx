import { ReactNode } from "react";

const FooterSubHeader = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-black font-semibold mb-2 tracking-tight">{children}</p>
  );
};

export default FooterSubHeader;
