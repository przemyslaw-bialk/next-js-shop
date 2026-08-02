"use client";
import Button from "@/app/components/Button";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const AddProductSize = () => {
  const [sizes, setSizes] = useState<string[]>([]);
  const [sizeInput, setSizeInput] = useState("");

  const addSize = () => {
    const size = sizeInput.trim().toUpperCase();

    if (!size || sizes.includes(size)) return;

    setSizes((prev) => [...prev, size]);
    setSizeInput("");
  };

  const removeSize = (size: string) => {
    setSizes((prev) => prev.filter((s) => s !== size));
  };
  return (
    <div className="flex flex-col gap-2">
      <label>Sizes:</label>
      <div className="flex gap-2">
        <input
          value={sizeInput}
          onChange={(e) => setSizeInput(e.target.value)}
          placeholder="e.g. SM"
          className="rounded-xl border border-neutral-200 p-1 pl-4"
        />

        <Button onClick={addSize} className="w-20" type="button">
          Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 ">
        {sizes.map((size) => (
          <div
            key={size}
            className="relative border border-neutral-200 rounded-xl px-5 py-1 cursor-pointer text-sm group"
            onClick={() => removeSize(size)}
          >
            {size}
            <HiMiniXMark className="absolute top-0 right-1 group-hover:text-accent" />
          </div>
        ))}
      </div>

      <input type="hidden" name="sizes" value={JSON.stringify(sizes)} />
    </div>
  );
};

export default AddProductSize;
