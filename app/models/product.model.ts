import mongoose, { ObjectId } from "mongoose";

interface IProduct {
  _id: ObjectId;
  name: string;
  price: number;
  stock: number;
}

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
