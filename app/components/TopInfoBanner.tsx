import { MdOutlineLocalShipping } from "react-icons/md";

const TopInfoBanner = () => {
  return (
    <div className="bg-primary text-secondary text-center rounded-t-lg p-2 text-xs tracking-wide flex items-center justify-center gap-2">
      <p>Free shipping for orders over 100$</p>
      <MdOutlineLocalShipping size={15} />
    </div>
  );
};

export default TopInfoBanner;
