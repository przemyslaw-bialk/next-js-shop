import { Product } from "@/app/types/products";
import Link from "next/link";
import { RiArrowRightLongLine } from "react-icons/ri";
import BestsellersCard from "./BestsellersCard";

type BestsellersProps = {
  products: Product[];
};

const Bestsellers = ({ products }: BestsellersProps) => {
  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold">Bestsellers</h4>
        <div className="flex items-center gap-2 font-bold group ">
          <Link href="/products">See All</Link>
          <RiArrowRightLongLine className="group-hover:translate-x-px" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.slice(0, 5).map((product) => (
          <BestsellersCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
