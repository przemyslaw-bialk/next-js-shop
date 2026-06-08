import { getCategories } from "@/app/services/category.service";
import Link from "next/link";

const CategoryList = async () => {
  const categories = await getCategories();

  console.log(categories);
  return (
    <div>
      <p>category list</p>
      {categories.map((category) => (
        <div key={category._id}>
          <Link href={`/products/categories/${category._id}`}>
            {category.name}{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
