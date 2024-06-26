import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

import RemoteComponent from "remote/Remote";
import RemoteDecoupled from "remote/RemoteDecoupled";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      RemoteDecoupled(ref.current);
    }
  });

  return (
    <div>
      <p>Host / Shell</p>
      <RemoteComponent />

      <div ref={ref}></div>
    </div>
  );
};

root.render(<App />);
