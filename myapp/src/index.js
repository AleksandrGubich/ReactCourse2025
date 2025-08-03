import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Header } from "./App";

// const text = "Hello world";

// const elem = (
//   <div>
//     <h2 className="text">Text: {text}</h2>
//     <label htmlFor=""></label>
//     <input type="text" />
//     <button tabIndex={0}>Click</button>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // elem
  <StrictMode>
    <App />
  </StrictMode>
);
