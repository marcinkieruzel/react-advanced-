import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Snaggy from "./components/Snaggy";
import BouncingBox from "./components/BouncingBox";
import ListWrapper from "./components/ListWrapper";
import { ThemeContext, ThemeDispatchContext } from "./components/Context";

function App({ children }: { children: React.ReactNode }) {
  const dispatch = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
      className="App"
    >
      <button onClick={() => dispatch(theme === "light" ? "dark" : "light")}>
        Change theme
      </button>
      <div className="container">
        {children}

      
      </div>
    </div>
  );
}

export default App;
