import { Product } from "@/app/types/products";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type ProductsProps = {
  products: Product[];
  setShowList: Dispatch<SetStateAction<boolean>>;
};

const SearchBarItemList = ({ products, setShowList }: ProductsProps) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2  mt-2 w-full md:w-2/5 rounded-md border bg-white shadow-lg z-50 overflow-hidden">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex items-center gap-2 p-2 hover:bg-gray-50"
        >
          <Image
            src={product.image?.image_url || "/defaultProductImage.png"}
            width={30}
            height={30}
            alt={product.name}
          />
          <p>{product.name}</p>
        </div>
      ))}

      <button
        className="absolute top-2 right-2"
        onClick={() => setShowList(false)}
      >
        x
      </button>
    </div>
  );
};

export default SearchBarItemList;
