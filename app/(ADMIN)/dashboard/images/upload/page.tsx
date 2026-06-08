"use client";
import { ChangeEvent, useState } from "react";

const ImageUploadPage = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmit = async () => {
    if (!image) {
      alert("Please select an image!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await fetch("http://localhost:3000/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("upload failed");
      }

      const data = await res.json();
      console.log("success:", data);
    } catch (err) {
      console.error("error uploading image:", err);
    }
  };

  return (
    <div>
      <h1>Upload image here</h1>

      <div className="w-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="p-10 bg-red-300"
        />
      </div>

      <button
        onClick={onSubmit}
        className="bg-[#151515] text-secondary cursor-pointer py-1 px-4 text-sm rounded-2xl"
      >
        Upload image
      </button>
    </div>
  );
};

export default ImageUploadPage;
