import React from "react";

const Snaggy = (): JSX.Element => {
  const wait = (ms: number) => {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  };

  wait(200);

  return <div>Snaggy</div>;
};

export default Snaggy;
