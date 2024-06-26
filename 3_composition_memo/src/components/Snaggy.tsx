import React, { useMemo } from "react";

const Snaggy = (): JSX.Element => {
  const wait = (ms: number) => {
    //Some importnant calculations
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  };

  useMemo(() => wait(200), []);

  return <div>Snaggy</div>;
};

export default Snaggy;
