import Image from "next/image";

import Woman from "../../../public/Woman_fashion.png";

const InfoSale2 = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-[#EFEADE] flex">
      <div className="w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-2xl font-bold text-black">
          Up to 30% for some products
        </h2>

        <button className="mt-4 w-fit bg-black text-white px-4 py-2 rounded-md">
          Check
        </button>
      </div>
      <div className="w-1/2 relative">
        <div className="w-1/2 relative">
          <img src={Woman.src} alt="Woman fashion" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default InfoSale2;
