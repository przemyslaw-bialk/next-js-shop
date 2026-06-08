import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  image_url: String,
  public_id: String,
});

export const Image =
  mongoose.models.Image || mongoose.model("Image", ImageSchema);
