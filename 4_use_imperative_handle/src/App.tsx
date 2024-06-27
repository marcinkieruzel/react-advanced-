import React, { useRef } from "react";
import LoginForm from "./LoginForm";
import "./App.css";

function App() {
  const ref = useRef<{
    login: HTMLInputElement | null;
    password: HTMLInputElement | null;
    submit: () => void;
    reset: () => void;
  }>({
    login: null,
    password: null,
    submit: () => {},
    reset: () => {},
  });

  return (
    <div className="App">
      <LoginForm ref={ref} />

      <button
        onClick={() => {
          ref.current.submit();
        }}
        className="btn btn-success"
      >
        Submit
      </button>

      <button
        onClick={() => {
          console.log(
            ref?.current?.login?.value,
            ref?.current?.password?.value
          );
        }}
        className="btn btn-success"
      >
        Get values
      </button>

      <button
        onClick={() => {
          ref.current.reset();
        }}
        className="btn btn-success"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
