import React from "react";
import ListItem from "./ListItem";

function ScoreBoard(props) {
  return (
    <div class="card-container">
      <div class="card">
        {props.dataSet.map((item, i) => {
          return <ListItem data={item} />;
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;
