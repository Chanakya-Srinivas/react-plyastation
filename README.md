# Lets make our hand dirty

### React components are regular JavaScript functions except:

#### Their names always begin with a capital letter.

#### They return JSX markup.

### By this browser & react knows that the markers starts with lower case are HTML tags and <Profile /> starts with a capital P, so React knows that we want to use our component called Profile.

### Components can render other components, but you must never nest their definitions:

### So When a child component needs some data from a parent, pass it by props instead of nesting definitions.

#### While redering list of childerns their key must be unique, it should mention explicitly or else it will through error

- ```
  const parent = React.createElement("div", { id: "parent" }, [
  child,
  React.createElement(Profile, { key: "2" }),
  ]);
  ```

#### While using live reloading tool (like Parcel with HMR)

- if your not checking whether root is already create or not
- it's trying to call createRoot() again when your file changes
- but that can only be done once per DOM element.
- ```if (!container._root) {
  container.\_root = ReactDOM.createRoot(container);
  }
  ```

#### Example of creating component

- ```export default function Profile() {
  return React.createElement(
  "h1",
  { id: "heading2", key: "2" },
  "Hello from Texas!"
  );
  }
  ```
