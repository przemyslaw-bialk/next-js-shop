import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
