import React, { useState } from "react";

// Color Organizer
import colorData from "./components/ColorOrganizer/color-data.json";
import ColorList from "./components/ColorOrganizer/ColorList";
import "./App.css";

// import StarRating from "./components/StarRating/StarRating";
// import Countdown from "./components/Countdown/Countdown";
// import Counting from "./components/Counting/Counting";
// import CounterHooks from "./components/CounterHooks/CounterHooks";
// import UseEffectDocs from "./components/UseEffect/UseEffectDocs";
// import RelojHooks from "./components/RelojHooks/RelojHooks";
// import HooksApi from "./components/HooksApi/HooksApi";
// import UsingCustomHook from "./components/UsingCustomHook/UsingCustomHook";
// import Form from "./components/Form/Form";
import AddColorForm from "./components/FormOReilly/AddColorForm";
import { v4 } from "uuid";

// function App() {
//   return (
//     <div className="container">
//       <Form />
//     </div>
//   );
// }

// Color Organizer
function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ];
          setColors(newColors);
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
    </>
  );
}

export default App;
