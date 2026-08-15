import { getCategories } from "@/app/services/category.service";
import Link from "next/link";
import FooterSubHeader from "./FooterSubHeader";

const FooterProductCategories = async () => {
  const categories = await getCategories();
  return (
    <div>
      <FooterSubHeader>Categories</FooterSubHeader>
      {categories.map((category) => (
        <ul key={category._id}>
          <li>
            <Link
              href={`/products/categories/${category._id}`}
              className="text-sm"
            >
              {category.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FooterProductCategories;
