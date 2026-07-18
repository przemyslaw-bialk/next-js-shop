import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { Product } from "@/app/types/products";

type ProductProp = {
  product: Product;
};

const BestsellersCard = ({ product }: ProductProp) => {
  return (
    <div>
      <div className="bg-[#F4F2F0] relative rounded-md">
        <Image
          src="/defaultProductImage.png"
          width={300}
          height={400}
          alt="product image"
        />
        <FaRegHeart className="absolute top-2 right-2" />
      </div>
      <p className="font-semibold mt-2">{product.name}</p>
      <p className="font-semibold">{product.price} usd</p>
    </div>
  );
};

export default BestsellersCard;
