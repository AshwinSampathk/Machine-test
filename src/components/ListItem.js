import React from "react";
import ScorePoints from "./ScorePoints";
import { RANKS } from "../constants/index";

function ListItem({ data }) {
  const styles = {
    rank: {
      backgroundColor: data.rank < 4 ? RANKS[data.rank - 1] : RANKS[3],
    },
    listItemPosition: {
      top: `${50 * (data.rank - 1)}px`,
    },
  };
  return (
    <div class="list-item-container" style={styles.listItemPosition}>
      <div class="list-item">
        <div class="list-item-rank" style={styles.rank}>
          {data.rank}
        </div>
        <span class="list-item-image" />
        <div class="list-item-name">{data.displayName}</div>
      </div>
      <div class="list-item-score">
        <ScorePoints data={data.score} />
      </div>
    </div>
  );
}

export default ListItem;
