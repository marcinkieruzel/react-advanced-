import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TEST from "./components/TEST";
import { TESTObject, TESTPrimitive } from "./config";

function App() {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("App useEffect", TESTObject.current);
      setCounter((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>{TESTObject.current}</h1>
      <h2>{TESTPrimitive}</h2>
      <TEST />
    </div>
  );
}

export default App;
