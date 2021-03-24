import {
  MAXIMUM,
  MINIMUM,
  DYNAMIC_HELPER,
  STATIC_HELPER,
} from "../constants/index";

const sortScore = function (itemOne, itemTwo) {
  var valueOne = itemOne.score;
  var valueTwo = itemTwo.score;
  if (valueOne < valueTwo) return 1;
  else if (valueOne > valueTwo) return -1;
  else return 0;
};

const setrank = (userID, arr) => {
  let data = null;
  arr.forEach((item, index) => {
    if (item.userID === userID) {
      data = index + 1;
    }
  });
  return data;
};

export const getFormatData = (arr) => {
  const newArr = [...arr].map((item) => {
    return {
      ...item,
      score: (item.score +=
        Math.floor(Math.random() * DYNAMIC_HELPER) < STATIC_HELPER
          ? Math.floor(Math.random() * MAXIMUM + MINIMUM)
          : 0),
    };
  });
  newArr.sort((itemOne, itemTwo) => {
    return sortScore(itemOne, itemTwo);
  });

  return arr.map((item,i) => {
    return {
      ...item,
      rank: setrank(item.userID, newArr),
    };
  });
};
