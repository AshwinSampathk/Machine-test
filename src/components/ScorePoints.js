import React, { useState, useEffect } from "react";
import { SCORE } from "../constants/index";

function ScorePoints({ data }) {
  const [num, setNum] = useState(data);

  useEffect(() => {
    let i = SCORE.INTERVAL_INDEX;
    const interval = setInterval(() => {
      i -= 1;
      setNum((n) => Math.floor(n + (data - n) / SCORE.DIVISOR));
      if (i <= 0) {
        setNum(data);
        clearInterval(interval);
      }
    }, SCORE.INTERVAL_VALUE);
    return function cleanup() {
      clearInterval(interval);
    };
  }, [data]);

  return <span>{num}pt</span>;
}

export default ScorePoints;
