import mongoose, { ObjectId } from "mongoose";

interface IProduct {
  _id: ObjectId;
  name: string;
}

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
