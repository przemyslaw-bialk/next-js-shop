import Image from "next/image";
import DeleteImage from "./DeleteImage";

type ImageType = {
  _id: string;
  image_url: string;
  public_id: string;
};

type ImagesProps = {
  images: ImageType[];
};

const DisplayImages = ({ images }: ImagesProps) => {
  return (
    <div className="flex flex-wrap gap-4 relative ">
      {images.map((image) => (
        <div
          key={image._id}
          className="relative w-32 h-32 border rounded-xl overflow-hidden"
        >
          <Image
            src={image.image_url}
            alt={image.public_id}
            fill
            className="object-cover"
          />

          <DeleteImage id={image._id.toString()} />
        </div>
      ))}
    </div>
  );
};

export default DisplayImages;
