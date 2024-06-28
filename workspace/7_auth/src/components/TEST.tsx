import React from "react";
import { TESTObject, TESTPrimitive } from "../config";

type Props = {};

const TEST = ({}: Props): JSX.Element => {
  return (
    <div>
      <button
        onClick={() => {
          TESTObject.current++;
        //   TESTPrimitive++;
          console.log(TESTObject.current);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default TEST;
