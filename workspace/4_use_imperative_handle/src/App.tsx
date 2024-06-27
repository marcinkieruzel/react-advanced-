import React from "react";
import LoginForm from "./LoginForm";
import "./App.css";

function App() {
  const ref = React.useRef<{
    submit: () => void;
    login: HTMLInputElement | null;
    password: HTMLInputElement | null;
    reset: () => void;
  }>(null);

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(ref.current?.login?.value);
          console.log(ref.current?.password?.value);
          // ref.current?.submit();
          ref.current?.reset();
        }}
      >
        Submit
      </button>
      <LoginForm ref={ref} />
    </div>
  );
}

export default App;
