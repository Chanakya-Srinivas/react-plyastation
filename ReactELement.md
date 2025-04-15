Diving deep into the **core of React** by working with `React.createElement()` directly — great for understanding how JSX works under the hood.

**All the different ways** you can use `React.createElement()` to build elements.

---

**_React Element => React Element - JS Object => HTML Element(render by DOM)_**

### ✅ **1. Basic HTML Element**

```js
const heading = React.createElement("h1", null, "Hello React!");
```

- `"h1"` → type
- `null` → no props
- `"Hello React!"` → child

---

### ✅ **2. With Attributes/Props**

```js
const heading = React.createElement(
  "h1",
  { id: "title", className: "main-heading" },
  "Welcome!"
);
```

---

### ✅ **3. With Nested Elements (Single Child)**

```js
const inner = React.createElement("span", null, "I'm nested!");
const outer = React.createElement("div", { id: "outer" }, inner);
```

---

### ✅ **4. With Multiple Children (Array of Children)**

```js
const children = [
  React.createElement("li", { key: "1" }, "Item 1"),
  React.createElement("li", { key: "2" }, "Item 2"),
];

const list = React.createElement("ul", null, children);
```

---

### ✅ **5. With React Components**

```js
function Profile() {
  return React.createElement("h2", null, "I’m a component!");
}

// Render the component as an element
const profileElement = React.createElement(Profile, { key: "profile" });
```

---

### ✅ **6. With Fragments (Group without extra DOM)**

```js
const fragment = React.createElement(
  React.Fragment,
  null,
  React.createElement("h1", { key: "1" }, "Title"),
  React.createElement("p", { key: "2" }, "Paragraph")
);
```

---

### ✅ **7. With `null` or `undefined` children**

```js
const nothing = React.createElement("div", null, null); // renders <div></div>
```

---

### ✅ **8. Nested Everything Together**

```js
const app = React.createElement("div", { id: "app" }, [
  React.createElement("h1", { key: "1" }, "Hello"),
  React.createElement(Profile, { key: "2" }),
  React.createElement("p", { key: "3" }, "This is a paragraph"),
]);
```

---

### 🧠 Syntax Recap:

```js
React.createElement(type, props, ...children);
```

| Parameter  | Description                                        |
| ---------- | -------------------------------------------------- |
| `type`     | A string (HTML tag) or Component                   |
| `props`    | Attributes like `id`, `className`, `onClick`, etc. |
| `children` | String, element, or array of elements              |

---
