"use client";
import { useState } from "react";

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
      <label>Sizes</label>

      <div className="flex gap-2">
        <input
          value={sizeInput}
          onChange={(e) => setSizeInput(e.target.value)}
          placeholder="e.g. M"
          className="rounded-xl border px-3 py-2"
        />

        <button type="button" onClick={addSize}>
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <div
            key={size}
            className="rounded bg-gray-200 px-3 py-1 cursor-pointer"
            onClick={() => removeSize(size)}
          >
            {size} ✕
          </div>
        ))}
      </div>

      <input type="hidden" name="sizes" value={JSON.stringify(sizes)} />
    </div>
  );
};

export default AddProductSize;
