**Component Composition** is one of the most powerful patterns in React — it means building UIs by **combining small, reusable components** to create more complex ones.

Let’s go through different **examples of component composition**, step by step 👇

---

## ✅ 1. **Basic Composition**

Build a small component and use it inside a parent.

```jsx
function Title() {
  return <h1>Hello, I’m the title!</h1>;
}

function App() {
  return (
    <div>
      <Title />
      <p>This is the App component.</p>
    </div>
  );
}
```

---

## ✅ 2. **Props Composition**

Pass props to components to customize their behavior.

```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

---

## ✅ 3. **Children Prop Composition**

Use `props.children` to make components act like wrappers.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Inside a Card</h2>
      <p>This is reusable content!</p>
    </Card>
  );
}
```

---

## ✅ 4. **Slot-style Composition with Custom Props**

Pass specific elements as props.

```jsx
function Layout({ header, content, footer }) {
  return (
    <div>
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </div>
  );
}

function App() {
  return (
    <Layout
      header={<h1>Welcome!</h1>}
      content={<p>This is the content area.</p>}
      footer={<small>© 2025</small>}
    />
  );
}
```

---

## ✅ 5. **Composition + Conditional Rendering**

Compose behavior dynamically based on conditions.

```jsx
function Status({ isLoggedIn }) {
  return isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>;
}

function App() {
  const userLoggedIn = true;
  return (
    <div>
      <Status isLoggedIn={userLoggedIn} />
    </div>
  );
}
```

## ✅ 6.: React Element Inside Component

```jsx
function MyComponent() {
  const element = <h1>Hello from element!</h1>; // React element

  return (
    <div>
      {element}
      <h1>{100 * 200}</h1>
      <p>This is a component rendering an element.</p>
    </div>
  );
}
```

element is a React element (JSX form).

You can place it inside the return() using {}.
