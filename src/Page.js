import React from "react";

// some app variables
const title = "JavaScript";
const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png";
const features = [
  "Light Weight Scripting language.",
  "Dynamic Typing.",
  "Object-oriented programming support.",
  "Functional Style.",
  "Platform Independent.",
];

// JSX
// const JSXItem = <input type={"submit"} className={"button"} />;
// const otherJSX = <div>{JSXItem}</div>;
function Homepage() {
  return (
    <div>
      <h4>Title</h4>
      <h1>{title}</h1>
      <h4>Image</h4>
      <img src={image} alt={title} />
      <h4>Features</h4>
      {features.map((element, id) => (
        <p key={id}>{element}</p>
      ))}
    </div>
  );
}

export default Homepage;
