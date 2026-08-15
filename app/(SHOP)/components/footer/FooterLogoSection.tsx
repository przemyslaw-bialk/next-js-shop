import Link from "next/link";
import Logo from "../logo/Logo";
import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoTiktok,
} from "react-icons/bi";

const FooterLogoSection = () => {
  return (
    <div className="text-md">
      <Logo small={true} />
      <p className="text-neutral-600">
        Your favorite fashion store for you and your family
      </p>
      <div className="flex gap-2 text-xl mt-4">
        <Link href="/">
          <BiLogoInstagram />
        </Link>
        <Link href="/">
          <BiLogoFacebookSquare />
        </Link>
        <Link href="/">
          <BiLogoTiktok />
        </Link>
        <Link href="/">
          <BiLogoFacebookSquare />
        </Link>
      </div>
    </div>
  );
};

export default FooterLogoSection;
