import dbConnect from "@/app/lib/mongodb";
import UploadImage from "@/app/lib/upload-image";
import { Image } from "@/app/models/image.model";

export async function POST(request: Request) {
  await dbConnect();

  const formData = await request.formData();

  try {
    const image = formData.get("image") as File;

    if (image) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const uploadResult: any = await UploadImage(image, "image-upload");

      console.log(uploadResult);

      await Image.create({
        image_url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      });
    }

    return Response.json({ message: "image uploaded!" }, { status: 200 });
  } catch (error) {
    console.log(error);

    return Response.json(
      { message: "error while uplaoding image!" },
      { status: 400 },
    );
  }
}
