const calculate = (correctTaps, wrongTaps) => {
  let score = Math.round(correctTaps / (correctTaps + wrongTaps) * 3);
  if (score == 3) return require("../assets/all-stars.png");
  else if (score == 2) return require("../assets/two-star.png");
  else if (score == 1) return require("../assets/one-star.png");
  return require("../assets/zero-star.png");
};
export default calculate;
