import Image from "next/image";

const InfoSale = () => {
  return (
    <div className="w-full md:w-1/2 relative overflow-hidden md:h-48 rounded-xl bg-[#EFEADE] flex h-60">
      {/* TEXT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-3 z-10 relative">
        <h2 className="text-2xl font-bold text-black">
          Up to 30% for some products
        </h2>

        <button className="mt-4 w-fit bg-black text-white px-4 py-2 rounded-md">
          Check
        </button>
      </div>

      {/* TABLETS + */}
      <div className="hidden md:block w-1/2 relative mr-4">
        <Image
          src="/Woman_fashion.png"
          alt="woman fashion"
          fill
          className="object-cover scale-120"
        />
      </div>

      {/* MOBILE  */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/Woman_fashion.png"
          alt="woman fashion mobile"
          fill
          className="object-cover opacity-40 scale-140"
        />
      </div>
    </div>
  );
};

export default InfoSale;
