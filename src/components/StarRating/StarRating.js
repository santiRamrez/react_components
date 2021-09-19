import React from "react";

//Icon
import { FaStar } from "react-icons/fa";

import "./StarRating.css";

const createArray = (length) => [...Array(length)];

function StarRating({ totalStars = 5, selectedStars = 0, onRate = (f) => f }) {
  // const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      <div className="starRating">
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar
    className="starSVG"
    color={selected ? "red" : "grey"}
    onClick={onSelect}
  />
);

export default StarRating;
