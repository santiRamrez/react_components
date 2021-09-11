import React, { useState } from "react";

//Icon
import { FaStar } from "react-icons/fa";

import "./StarRating.css";

const createArray = (length) => [...Array(length)];

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="starRating">
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
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
