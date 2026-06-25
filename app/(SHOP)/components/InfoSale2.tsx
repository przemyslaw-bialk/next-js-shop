import Image from "next/image";

const InfoSale2 = () => {
  return (
    <div className="w-1/2 overflow-hidden h-48 rounded-xl bg-[#EFEADE] flex ">
      <div className="w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-2xl font-bold text-black">
          Up to 30% for some products
        </h2>

        <button className="mt-4 w-fit bg-black text-white px-4 py-2 rounded-md">
          Check
        </button>
      </div>
      <div className="w-1/2 relative">
        <div>
          <Image
            src="/Woman_fashion.png"
            fill
            className="object-cover scale-120"
            alt="woamng"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSale2;
