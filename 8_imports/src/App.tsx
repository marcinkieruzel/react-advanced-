import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { name as n, person } from "./imports/test-module"; //Singelton import

function App() {
  const [mockStateChange, setMockStateChange] = React.useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      console.log(n, person);
      setMockStateChange((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <div className="App">
      <h1>{n}</h1>
      <h1>
        {person.name} {person.age}
      </h1>
    </div>
  );
}

export default App;
