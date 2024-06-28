import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/login";
import User from "./components/User";
import { UserContextWrapper } from "./UserContext/index";
import Layout from "./components/Layout";
import AxiosWrapper from "./AxiosWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextWrapper>
      <AxiosWrapper>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<User />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AxiosWrapper>
    </UserContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
