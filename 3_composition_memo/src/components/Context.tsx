import React, { createContext } from "react";
import App from "../App";

type Props = {};

export const ThemeContext = createContext<"light" | "dark">("light");
export const ThemeDispatchContext = createContext<
  React.Dispatch<React.SetStateAction<"light" | "dark">>
>(() => {});

const Context = ({}: Props): JSX.Element => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        <App />
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Context;
