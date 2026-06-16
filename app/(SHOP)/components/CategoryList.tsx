import { getCategories } from "@/app/services/category.service";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const categories = await getCategories();

  return (
    <div>
      {categories.map((category) => (
        <div key={category._id}>
          <Image
            src={category.image.image_url}
            alt={category.name}
            width={80}
            height={80}
          />{" "}
          <Link href={`/products/categories/${category._id}`}>
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
