import NewCategoryForm from "@/app/(ADMIN)/components/NewCategoryForm";
import { getImages } from "@/app/services/image.service";

const NewCategoryPage = async () => {
  const images = await getImages();

  return (
    <div>
      <h1>create category</h1>
      <NewCategoryForm images={images} />
    </div>
  );
};

export default NewCategoryPage;
