"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { PiTableThin } from "react-icons/pi";

const SizeTable = () => {
  const [showTable, setShowTable] = useState(false);

  const sizes = [
    { size: "XS", chest: "84–89", waist: "70–75", hips: "86–91" },
    { size: "S", chest: "90–95", waist: "76–81", hips: "92–97" },
    { size: "M", chest: "96–101", waist: "82–87", hips: "98–103" },
    { size: "L", chest: "102–107", waist: "88–93", hips: "104–109" },
    { size: "XL", chest: "108–113", waist: "94–99", hips: "110–115" },
    { size: "XXL", chest: "114–119", waist: "100–105", hips: "116–121" },
  ];

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowTable(true)}
        className="underline text-sm flex items-center gap-1 mt-1"
      >
        <PiTableThin size={20} />
        <span>Size table</span>
      </button>

      {showTable && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowTable(false)}
        >
          <div className="relative w-[90%] max-w-xl rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={() => setShowTable(false)}
              className="absolute right-4 top-4"
            >
              <IoClose size={22} />
            </button>

            <h2 className="mb-4 text-lg font-semibold">Size table</h2>

            <div className="overflow-x-auto rounded-md border border-neutral-200">
              <table className="w-full text-sm">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Size</th>
                    <th className="px-4 py-3 text-left">Chest (cm)</th>
                    <th className="px-4 py-3 text-left">Waist (cm)</th>
                    <th className="px-4 py-3 text-left">Hips (cm)</th>
                  </tr>
                </thead>

                <tbody>
                  {sizes.map((item) => (
                    <tr key={item.size} className="border-t border-neutral-200">
                      <td className="px-4 py-3 font-semibold">{item.size}</td>
                      <td className="px-4 py-3">{item.chest}</td>
                      <td className="px-4 py-3">{item.waist}</td>
                      <td className="px-4 py-3">{item.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeTable;
