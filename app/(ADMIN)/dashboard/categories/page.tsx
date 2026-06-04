import Link from "next/link";

const CategoriesPage = () => {
  return (
    <div>
      <h1>manage categories</h1>
      <Link href="/dashboard/categories/new">create category</Link>
    </div>
  );
};

export default CategoriesPage;
