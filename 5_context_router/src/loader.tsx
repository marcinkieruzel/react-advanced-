import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Cart, { eventEmitter } from "./cart-context/Cart";

// import App from "./App";
// import SingleProperty from "./components/SingleProperty";

// @ts-ignore
import SP from "remote/SingleProperty";

console.log("Single Property", SP);

// const App = lazy(() => import("./App"));
// const SingleProperty = lazy(() => import("./components/SingleProperty"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

enum RoutesEnum {
  HOME = "/",
  PROPERTY = "/property/:id",
}

root.render(
  // <React.StrictMode>
  <Cart>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path={RoutesEnum.HOME}
            element={
              // <Suspense fallback={<h1>Loading...</h1>}>
              <App />
              // </Suspense>
            }
          />
          <Route
            path={RoutesEnum.PROPERTY}
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                {/* <SingleProperty emitter={eventEmitter} /> */}
                <SP emitter={eventEmitter} />
              </Suspense>
            }
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Cart>

  // </React.StrictMode>
);
