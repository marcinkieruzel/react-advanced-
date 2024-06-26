import React from "react";
import ReactDOM from "react-dom/client";
import RemoteComponent from "./Remote";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <p>Remote</p>
      <RemoteComponent />
    </div>
  );
};

root.render(<App />);
