import React from "react";

type Props = {
  x: number;
  y: number;
};

const BouncingBox = ({ x, y }: Props): JSX.Element => {
  return (
    <div
      style={{
        position: "absolute",
        top: y + 100,
        left: x / 10,
        width: "40px",
        height: "40px",
        backgroundColor: "red",
        borderRadius: "50%",
      }}
    >
      BouncingBox
    </div>
  );
};

export default BouncingBox;
