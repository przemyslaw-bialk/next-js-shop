import Link from "next/link";

type LogoProps = {
  small?: boolean;
};

const Logo = ({ small = false }: LogoProps) => {
  return (
    <Link href="/">
      <span
        className={`font-display font-bold tracking-tight transition group-hover:text-primary
            ${small ? "text-xl" : "text-3xl"}`}
      >
        ShopIo.
      </span>
    </Link>
  );
};

export default Logo;
