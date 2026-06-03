import { RiArrowRightLongLine } from "react-icons/ri";

const ButtonSlider = ({ text }: { text: string }) => {
  return (
    <button className="bg-[#151515] text-secondary py-3 px-6 group mt-6 shadow-amber-950 shadow-2xl ">
      <div className="flex items-center justify-center gap-4 tracking-wider">
        <p>{text}</p>
        <RiArrowRightLongLine className="group-hover:translate-x-3 transition" />
      </div>
    </button>
  );
};

export default ButtonSlider;
