import React, { useState, useEffect } from "react";
import scoreDataset from "../constants/data.json";
import { getFormatData } from "../services";
import { INTERVAL_VALUE } from "../constants/index";
import ScoreBoard from "../components/Scoreboard";

function MainPage() {
  const [data, setData] = useState(getFormatData(scoreDataset));

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getFormatData);
    }, INTERVAL_VALUE);
    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return (
    <div class="overlay">
      <ScoreBoard dataSet={data} />
    </div>
  );
}

export default MainPage;
