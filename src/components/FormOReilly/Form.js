import React, { useState } from "react";
import AddColorForm from "./AddColorForm";

const Form = () => {
  const [data, setData] = useState({});
  return (
    <>
      <h2>Color Form</h2>
      <AddColorForm
        onNewColor={(title, color) => {
          setData({
            title,
            color,
          });
        }}
      />
    </>
  );
};

export default Form;
