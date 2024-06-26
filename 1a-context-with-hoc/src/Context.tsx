import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import App from "./App";

interface CreateContextState {
  counter: number;
  time: Date;
}

export const TestContext = createContext<CreateContextState>({
  counter: 0,
  time: new Date(),
});

export const TestDispatchContext = createContext<
  React.Dispatch<{ type: ActionType }>
>(() => {});

export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  UPDATE_TIME = "UPDATE_TIME",
}

const reducer = function (
  state: CreateContextState,
  action: { type: ActionType }
) {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ActionType.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ActionType.UPDATE_TIME: {
    }
  }

  return state;
};

const TestContextWrapper = ({ child }: { child: React.ReactNode }) => {
  //   const [state, setState] = useState<CreateContextState>({
  //     counter: 0,
  //     time: new Date(),
  //   });

  // setState(prev => ({ ...prev, counter: prev.counter + 1 }) )

  const [s, d] = useReducer(reducer, {
    counter: 0,
    time: new Date(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      d({ type: ActionType.UPDATE_TIME });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TestContext.Provider value={s}>
      <TestDispatchContext.Provider value={d}>
        {child}
        {/* Render props prevents rerendering  */}
      </TestDispatchContext.Provider>
    </TestContext.Provider>
  );
};

export default TestContextWrapper;

export const useTestContext = () => {
  const state = useContext(TestContext);

  return state;
};

export const useTestDispatch = () => {
  const dispatch = useContext(TestDispatchContext);

  return dispatch;
};
