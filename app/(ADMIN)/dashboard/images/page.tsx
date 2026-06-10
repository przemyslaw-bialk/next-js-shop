import { getImages } from "@/app/services/image.service";
import Link from "next/link";
import DisplayImages from "../../components/DisplayImages";

const ImagesPage = async () => {
  const images = await getImages();

  console.log(images);
  return (
    <div>
      <h1>gett all images here</h1>
      <Link href="/dashboard/images/upload">Uplooad Image</Link>
      <DisplayImages images={images} />
    </div>
  );
};

export default ImagesPage;
