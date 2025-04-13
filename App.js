import React from "react";
import ReactDOM from "react-dom/client";

export default function Profile() {
  return React.createElement(
    "h1",
    { id: "heading2", key: "2" },
    "Hello from Texas!"
  );
}

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);

// const heading2 = React.createElement("h2",{id:"heading"}, "Hello from React2!");

const child = React.createElement("div", { id: "child", key: "1" }, heading);

// While redering list of childerns their key must be unique, it should mention explicitly or else it will through error
const parent = React.createElement("div", { id: "parent" }, [
  child,
  React.createElement(Profile, { key: "2" }),
]);

console.log(heading);

const container = document.getElementById("root");

/*
While using live reloading tool (like Parcel with HMR)
- if your not checking whether root is already create or not
- it's trying to call createRoot() again when your file changes
- but that can only be done once per DOM element.
*/
if (!container._root) {
  container._root = ReactDOM.createRoot(container);
}

container._root.render(parent);
