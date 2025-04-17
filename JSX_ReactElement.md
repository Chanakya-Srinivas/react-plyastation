let’s look at **how to write the exact same things using JSX** — the more common and readable syntax used in modern React development.

**_JSX => React Element => React Element - JS Object => HTML Element(render by DOM)_**

- Babel **Transpiled**(convert) JSX to React Element

---

## 🔁 **1. Basic HTML Element**

```jsx
const heading = <h1>Hello React!</h1>;

const divtab = <div>{heading}</div>;
```

---

## 🔁 **2. With Attributes/Props**

- JSX multiple lines use paranthasis

```jsx
const heading = (
  <h1 id="title" className="main-heading">
    Welcome!
  </h1>
);
```

> ✅ In JSX, use `className` instead of `class` (since `class` is a reserved keyword in JS).

---

## 🔁 **3. Nested Elements (Single Child)**

```jsx
const outer = (
  <div id="outer">
    <span>I'm nested!</span>
  </div>
);
```

---

## 🔁 **4. Multiple Children (Array of Elements)**

```jsx
const list = (
  <ul>
    <li key="1">Item 1</li>
    <li key="2">Item 2</li>
  </ul>
);
```

---

## 🔁 **5. React Components**

```jsx
function Profile() {
  return <h2>I’m a component!</h2>;
}

// Usage
const profileElement = <Profile />;
```

---

## 🔁 **6. Fragments**

```jsx
const fragment = (
  <>
    <h1 key="1">Title</h1>
    <p key="2">Paragraph</p>
  </>
);
```

> ✅ `<></>` is shorthand for `<React.Fragment></React.Fragment>`

---

## 🔁 **7. Null / Empty Children**

```jsx
const nothing = <div></div>; // or just <div />
```

---

## 🔁 **8. Nested Everything Together**

```jsx
function Profile() {
  return <h2>I’m a component!</h2>;
}

const app = (
  <div id="app">
    <h1>Hello</h1>
    <Profile />
    <p>This is a paragraph</p>
  </div>
);
```

---

### 💡 JSX Summary

| JSX                  | Equivalent to                             |
| -------------------- | ----------------------------------------- |
| `<div></div>`        | `React.createElement('div')`              |
| `<Component />`      | `React.createElement(Component)`          |
| `<div>{child}</div>` | `React.createElement('div', null, child)` |
| `<>...</>`           | `React.createElement(React.Fragment)`     |

---

JSX is basically **syntactic sugar for `React.createElement()`**, and it makes code **more readable and maintainable**, especially for complex UIs.

Want to go one step further and see how JSX gets compiled into `React.createElement()` behind the scenes?
