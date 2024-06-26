/**
 * I asume that host microfrontend doesnt know if I' using react or not neither I dont know i there is react on host microfrontend
 */


import React from "react";
import ReactDOM from "react-dom/client";

const RemoteDecoupled = () => {
  return (
    <div>
      <h1>Remote Decoupled</h1>
    </div>
  );
};

export default (element) => {
    if(element) {
        const root = ReactDOM.createRoot(element);

        root.render(<RemoteDecoupled />);
    }
}
