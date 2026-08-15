import Image from "next/image";
const currentYear = new Date().getFullYear();

const FooterCopyrights = () => {
  return (
    <div className="flex items-center justify-between p-1">
      <span className="text-neutral-400  text-xs ">
        © {currentYear} Przemysław Białk. All rights reserved.
      </span>
      <div className="flex items-center gap-4 ">
        <Image src="/icons/visa.svg" width={40} height={30} alt="visa icon" />
        <Image
          src="/icons/mastercard.svg"
          width={25}
          height={30}
          alt="mastercard icon"
        />
        <Image
          src="/icons/gpay.svg"
          width={30}
          height={35}
          alt="google pay icon"
        />
        <Image
          src="/icons/applepay.svg"
          width={30}
          height={35}
          alt="apple pay icon"
        />
      </div>
    </div>
  );
};

export default FooterCopyrights;
