"use client";
import { useState } from "react";
import { createCategoryAction } from "@/app/actions/categories";
import ImageGrid from "./ImageGrid";
import type { ImageType } from "@/app/types/image";

type Props = {
  images: ImageType[];
};

export default function NewCategoryForm({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <form action={createCategoryAction} className="space-y-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold">category name:</label>
        <input
          name="name"
          placeholder="e.g. Man"
          className="border rounded-lg px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black transition"
      >
        Create
      </button>
      <input type="hidden" name="image" value={selectedImage} />
      <ImageGrid
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </form>
  );
}
