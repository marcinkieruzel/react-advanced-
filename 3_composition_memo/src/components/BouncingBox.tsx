import React, { useDeferredValue, useEffect, useState } from "react";
import { ThemeContext } from "./Context";

const BouncingBox = (): JSX.Element => {
  const theme = React.useContext(ThemeContext);
  const [currentScroll, setScroll] = useState(0);
  const deferredScroll = useDeferredValue(currentScroll);

  useEffect(() => {
    const scrollHandler = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: deferredScroll + 100,
        left: deferredScroll / 10,
        width: "40px",
        height: "40px",
        backgroundColor: theme === "light" ? "red" : "green",
        borderRadius: "50%",
        transition: "all 0.1s",
      }}
    >
      BouncingBox
    </div>
  );
};

export default BouncingBox;
