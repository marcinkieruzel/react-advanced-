import React, { useEffect, useState } from "react";

const Header = (): JSX.Element => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <header className="App-header">
      <p>The current time is {time.toLocaleTimeString()}.</p>
    </header>
  );
};

export default Header;
