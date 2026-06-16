import { createCategoryAction } from "@/app/actions/categories";
import { getImages } from "@/app/services/image.service";

const NewCategoryPage = async () => {
  const images = await getImages();

  console.log(images);
  return (
    <div>
      <h1>create category</h1>
      <form action={createCategoryAction}>
        <label>Category</label>
        <input name="name" placeholder="e.g. Man" />

        <label>Image</label>
        <select name="image">
          {images.map((image) => (
            <option key={image._id} value={image._id}>
              {image.public_id}
            </option>
          ))}
        </select>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewCategoryPage;
