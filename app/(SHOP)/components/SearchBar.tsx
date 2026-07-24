import { findProductAction } from "@/app/actions/products";
import { KeyboardEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SearchBarItemList from "./SearchBarItemList";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleSearch = async () => {
    if (query === "") {
      return;
    }
    const products = await findProductAction(query);
    setProducts(products);
    setShowList(true);
    setQuery("");
  };

  const handleSearchOnEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (query === "") {
        return;
      }
      const products = await findProductAction(query);
      setProducts(products);
      setShowList(true);
      setQuery("");
    }
  };

  return (
    <div className="bg-red-200">
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
      {showList && (
        <SearchBarItemList products={products} setShowList={setShowList} />
      )}
    </div>
  );
};

export default SearchBar;
