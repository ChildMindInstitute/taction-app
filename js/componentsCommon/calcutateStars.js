const calculate = (correctTaps, wrongTaps) => {
  let score = Math.round(
    (correctTaps - wrongTaps) / (correctTaps + wrongTaps) * 3
  );
  if (score == 3) return require("../assets/all-stars.png");
  else if (score == 2) return require("../assets/two-star.png");
  return require("../assets/one-star.png");
};
export default calculate;
