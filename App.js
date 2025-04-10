const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);

// const heading2 = React.createElement("h2",{id:"heading"}, "Hello from React2!");

const child = React.createElement(
  "div",
  { id: "child" },
  React.createElement(
    "h1",
    {
      id: "heading",
    },
    "Hello from React!"
  )
);

const parent = React.createElement("div", { id: "parent" }, child);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent);
