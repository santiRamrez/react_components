import React from "react";
import { useInput } from "../../hooks/useInput";

//Uncontrolled Component
// const AddColorForm = ({ onNewColor = (f) => f }) => {
//   const txtTitle = useRef();
//   const hexColor = useRef();

//   const submit = (e) => {
//     e.preventDefault();
//     const title = txtTitle.current.value;
//     const color = hexColor.current.value;
//     onNewColor(title, color);
//     txtTitle.current.value = "";
//     hexColor.current.value = "";
//   };

//   return (
//     <form onSubmit={submit}>
//       <input ref={txtTitle} type="text" placeholder="color title..." required />
//       <input ref={hexColor} type="color" required />
//       <button>ADD</button>
//     </form>
//   );
// };

//Controlled Component
// const AddColorForm = ({ onNewColor = (f) => f }) => {
//   const [title, setTitle] = useState("");
//   const [color, setColor] = useState("#000000");

//   const submit = (e) => {
//     e.preventDefault();
//     onNewColor(title, color);
//     setTitle("");
//     setColor("");
//   };

//   return (
//     <form onSubmit={submit}>
//       <input
//         type="text"
//         onChange={(e) => setTitle(e.target.value)}
//         value={title}
//         placeholder="color title..."
//         required
//       />
//       <input
//         type="color"
//         onChange={(e) => setColor(e.target.value)}
//         value={color}
//         required
//       />
//       <button>ADD</button>
//     </form>
//   );
// };

//Controlled Component with Custom Hook
const AddColorForm = ({ onNewColor = (f) => f }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    let [title, color] = [titleProps.value, colorProps.value];
    onNewColor(title, color);
    resetColor();
    resetTitle();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        {...titleProps}
        placeholder="color title..."
        required
      />
      <input type="color" {...colorProps} required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
