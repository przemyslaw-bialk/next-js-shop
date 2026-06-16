import Image from "next/image";
import type { ImageType } from "@/app/types/image";

type Props = {
  images: ImageType[];
  selectedImage: string;
  setSelectedImage: (id: string) => void;
};

const ImageGrid = ({ images, selectedImage, setSelectedImage }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold">select image:</label>
      <div className="flex flex-wrap gap-3">
        {images.map((image) => (
          <div
            key={image._id}
            onClick={() => setSelectedImage(image._id)}
            className={`
      cursor-pointer rounded-lg overflow-hidden border transition p-3
      ${selectedImage === image._id ? "border-accent" : "border-transparent"}
      hover:border-black
    `}
          >
            <Image
              src={image.image_url}
              width={80}
              height={80}
              alt={image.public_id}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
