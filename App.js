// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// console.log(heading);  it is an object which is a React Element.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);  while rendering to DOM React element become HTML

/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent);
