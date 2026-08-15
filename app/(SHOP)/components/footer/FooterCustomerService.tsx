import Link from "next/link";
import FooterSubHeader from "./FooterSubHeader";

const FooterCustomerService = () => {
  return (
    <div>
      <FooterSubHeader>Customer Serice</FooterSubHeader>
      <div className="flex flex-col gap-1 pt-0.5">
        <Link
          href="/contact"
          className="text-sm hover:text-accent transition duration-200"
        >
          Contact
        </Link>
        <Link href="/complain_center" className="text-sm">
          Returns and Complains
        </Link>
        <Link href="/shipping" className="text-sm">
          Shipping
        </Link>
        <Link href="/payments" className="text-sm">
          Payments
        </Link>
        <Link href="/terms" className="text-sm">
          Terms of use
        </Link>
        <Link href="/FAQ" className="text-sm">
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default FooterCustomerService;
