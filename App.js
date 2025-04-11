import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);

// const heading2 = React.createElement("h2",{id:"heading"}, "Hello from React2!");

const child = React.createElement("div", { id: "child" }, heading);

const parent = React.createElement("div", { id: "parent" }, child);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent);
