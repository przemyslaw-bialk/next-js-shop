"use client";

import { useState } from "react";
import { createProductAction } from "@/app/actions/products";
import ImageGrid from "@/app/(ADMIN)/components/ImageGrid";
import type { ImageType } from "@/app/types/image";
import type { Category } from "@/app/types/category";

type Props = {
  categories: Category[];
  images: ImageType[];
};

const ProductForm = ({ categories, images }: Props) => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <form action={createProductAction} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Name</label>
        <input
          name="name"
          placeholder="e.g. shoes"
          required
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-zinc-800 outline-none transition focus:border-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Stock</label>
        <input
          name="stock"
          placeholder="10"
          type="number"
          required
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-zinc-800 outline-none transition focus:border-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Price</label>
        <input
          name="price"
          placeholder="0.00"
          type="number"
          required
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-zinc-800 outline-none transition focus:border-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Category</label>

        <select
          name="category"
          className="rounded-xl border border-neutral-200 bg-white px-3 py-2"
        >
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input type="hidden" name="image" value={selectedImage} />
      <ImageGrid
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <button
        type="submit"
        className="mt-2 cursor-pointer rounded-xl bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        Create
      </button>
    </form>
  );
};

export default ProductForm;
