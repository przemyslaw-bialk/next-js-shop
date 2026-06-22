import { VscPercentage } from "react-icons/vsc";

const SaleCategory = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-25 h-25 bg-[#F3F1ED] rounded-full flex items-center justify-center">
        <VscPercentage className="text-4xl text-[#5B4A3F]" />
      </div>
      <p className="text-red-500 text-sm mt-2">Sale</p>
    </div>
  );
};

export default SaleCategory;
