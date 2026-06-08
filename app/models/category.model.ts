import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
  },
  { timestamps: true },
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
