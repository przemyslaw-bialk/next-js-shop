import dbConnect from "../lib/mongodb";
import { Image } from "../models/image.model";

export async function getImages() {
  await dbConnect();
  const images = await Image.find().lean();

  return images.map((image) => ({
    _id: image._id.toString(),
    image_url: image.image_url,
    public_id: image.public_id,
  }));
}

export async function deleteImage(id: string) {
  await Image.findByIdAndDelete(id);
}
