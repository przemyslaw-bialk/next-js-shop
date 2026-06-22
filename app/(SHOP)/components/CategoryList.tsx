import { getCategories } from "@/app/services/category.service";
import Image from "next/image";
import Link from "next/link";
import SaleCategory from "./SaleCategory";

const CategoryList = async () => {
  const categories = await getCategories();

  return (
    <div className="flex flex-wrap gap-12 mt-5 items-center justify-center">
      {categories.map((category) => (
        <div key={category._id} className="flex flex-col items-center gap-2">
          <div className="relative w-25 h-25 rounded-full bg-[#ECECEC] overflow-hidden">
            <Image
              src={category.image.image_url}
              alt={category.name}
              fill
              className="object-contain"
            />
          </div>

          <Link
            href={`/products/categories/${category._id}`}
            className="text-sm"
          >
            {category.name}
          </Link>
        </div>
      ))}
      <SaleCategory />
    </div>
  );
};

export default CategoryList;
