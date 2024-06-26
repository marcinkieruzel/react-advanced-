import React, { useContext, useEffect, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ActionType,
  TestContext,
  TestDispatchContext,
  useTestContext,
  useTestDispatch,
} from "./Context";

const Timer = () => {
  const state = useContext(TestContext);

  return (
    <div>
      <h1>Timer {state.time.toLocaleTimeString()}</h1>
    </div>
  );
};

const Counter = React.memo(({ counter }: { counter: number }) => {
  // const state = useContext(TestContext);

  console.log("Execute component function Counter");

  const dispatch = useTestDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          dispatch({
            type: ActionType.INCREMENT,
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: ActionType.DECREMENT,
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
});

// Use HOC to wrap the component and prevent rendering
const CounterHoc = ({
  Component,
}: {
  Component: React.FC<{ counter: number }>;
}) => {
  const state = useTestContext();

  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <Component counter={state.counter} />
    </div>
  );
};

function App() {
  useEffect(() => {
    console.log("Renders App when the state changes");
  }, []);

  console.log("Execute component function App");

  //Why do I render ?
  // 1. When the state changes !!!
  // 2. ??? When the props change ??? (not in this case)
  // 3. When the parent component renders !!! (not in this case)

  return (
    <div className="App">
      <Timer />
      <CounterHoc Component={Counter} />
    </div>
  );
}

export default App;
