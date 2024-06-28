import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { name as n, person } from "./imports/test-module"; //Singelton import

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (true) {
  let t = require("./imports/test").payload;
  let name = require("./imports/test").name;

  console.log(t, name);

  name = "Something else";
  t.value = "Something else";
}

root.render(
  <React.StrictMode>
    <>
      <button
        onClick={() => {
          person.age = person.age + 1;
        }}
      >
        Change John age
      </button>
      <button
        onClick={() => {
          n = "Something else";
        }}
      >
        Change John name
      </button>
      <App />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
