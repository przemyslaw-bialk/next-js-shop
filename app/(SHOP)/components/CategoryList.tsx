import { getCategories } from "@/app/services/category.service";
import Link from "next/link";

const CategoryList = async () => {
  const categories = await getCategories();

  console.log(categories);
  return (
    <div>
      <p>category list</p>
      {categories.map((category) => (
        <Link key={category._id} href={`/products?category=${category._id}`}>
          {category.name}{" "}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
