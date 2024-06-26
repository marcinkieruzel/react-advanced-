import React from "react";

type Props = {
  time: Date;
};

const Header = ({ time }: Props): JSX.Element => {
  return (
    <header className="App-header">
      <p>The current time is {time.toLocaleTimeString()}.</p>
    </header>
  );
};

export default Header;
