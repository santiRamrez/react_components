import React from "react";
import "./App.css";

//Components
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="container">
      <StarRating totalStars={5} />
    </div>
  );
}

export default App;
