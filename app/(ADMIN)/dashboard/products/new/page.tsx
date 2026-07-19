import { getCategories } from "@/app/services/category.service";
import { getImages } from "@/app/services/image.service";
import ProductForm from "@/app/(ADMIN)/components/ProductForm";

const NewProductPage = async () => {
  const categories = await getCategories();
  const images = await getImages();

  const plainImages = images.map((image) => ({
    _id: image._id.toString(),
    image_url: image.image_url,
    public_id: image.public_id,
  }));

  const plainCategories = categories.map((category) => ({
    _id: category._id.toString(),
    name: category.name,
  }));

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-lg rounded-2xl border border-neutral-200 bg-white/70 p-6 backdrop-blur-xl">
        <h1 className="mb-6 text-lg font-semibold text-zinc-800">
          Create Product
        </h1>

        <ProductForm categories={plainCategories} images={plainImages} />
      </div>
    </div>
  );
};

export default NewProductPage;
