import Link from "next/link";
import FooterSubHeader from "./FooterSubHeader";

const FooterMyAccount = () => {
  return (
    <div>
      <FooterSubHeader>My account</FooterSubHeader>
      <ul>
        <li>
          <Link href="/sign-in" className="text-sm">
            Login
          </Link>
        </li>
        <li>
          <Link href="/my-orders" className="text-sm">
            My orders
          </Link>
        </li>
        <li>
          <Link href="/wishlist" className="text-sm">
            Wishlist
          </Link>
        </li>
        <li>
          <Link href="/account-setup" className="text-sm">
            Account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterMyAccount;
