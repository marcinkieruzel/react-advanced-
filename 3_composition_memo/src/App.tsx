import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Snaggy from "./components/Snaggy";
import BouncingBox from "./components/BouncingBox";
import ListWrapper from "./components/ListWrapper";
import { ThemeContext, ThemeDispatchContext } from "./components/Context";

function App() {
  const [times, setTime] = useState(new Date());
  const [currentScroll, setScroll] = useState(0);
  const dispatch = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);

    const scrollHandler = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);
  }, []);

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
        <Header time={times} />
        <ListWrapper />
        <Snaggy />
        <BouncingBox x={currentScroll} y={currentScroll} />
      </div>
    </div>
  );
}

export default App;
