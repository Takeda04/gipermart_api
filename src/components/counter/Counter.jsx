import { Button } from "@mui/material";
import React, { useState } from "react";
import "../../assets/scss/_counter.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const minusCounter = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    } else {
    }
  };

  const plusCounter = () => {
    setCounter((count) => count + 1);
  };

  return (
    <div className="counter">
      <Button onClick={minusCounter} className="minus">
        <AiOutlineMinus size={24} fill="#C4C4C4" />
      </Button>
      <div className="count">{counter}</div>
      <Button onClick={plusCounter} className="plus">
        <AiOutlinePlus size={24} fill="#C4C4C4" />
      </Button>
    </div>
  );
};

export default Counter;
