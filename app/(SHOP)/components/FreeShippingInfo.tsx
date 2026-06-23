import Image from "next/image";

const FreeShippingInfo = () => {
  return (
    <div className="w-full md:w-1/2 relative">
      <div className="bg-[#DADCCE] rounded-xl p-6 h-48 flex items-center justify-between">
        <div className="flex flex-col z-10">
          <span className="text-2xl font-bold text-black">
            Free shipping for orders over 100$
          </span>

          <button className="bg-black text-white py-1 px-3 mt-2 w-fit">
            check now
          </button>
        </div>

        {/*TABLETS + */}
        <div className="hidden md:block">
          <Image
            src="/box.png"
            alt="Box"
            width={555}
            height={555}
            className="object-contain scale-120"
          />
        </div>
        {/*SMALL DEVICES */}
        <div className="absolute bottom-0 right-0 z-0 md:hidden ">
          <Image src="/box.png" alt="Box" width={155} height={155} />
        </div>
      </div>
    </div>
  );
};

export default FreeShippingInfo;
