"use client";
import { useState } from "react";
import { TiStar } from "react-icons/ti";

const RateProduct = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  console.log(rating);

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        index = index + 1;

        return (
          <TiStar
            className="cursor-pointer"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            size={26}
            color={index <= (hover || rating) ? "#ffd700" : "#e4e5e9"}
          />
        );
      })}
      <p className="ml-3 text-xs font-semibold">(123 reviews)</p>
    </div>
  );
};

export default RateProduct;
