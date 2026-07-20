import { findProductAction } from "@/app/actions/products";
import { KeyboardEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const products = await findProductAction(query);
    setQuery("");
    console.log(products);
  };

  const handleSearchOnEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const products = await findProductAction(query);
      setQuery("");
      console.log(products);
    }
  };

  return (
    <div className="flex items-center rounded-sm border border-gray-200 bg-white px-4 py-2 shadow-sm transition focus-within:border-black focus-within:shadow-md">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for a product..."
        className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
        onKeyDown={handleSearchOnEnter}
      />

      <IoIosSearch
        className="ml-2 text-xl text-gray-500 transition hover:text-black cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
