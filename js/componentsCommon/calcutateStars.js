const calculate = (correctTaps, wrongTaps) => {
  let score = Math.round(
    (correctTaps - wrongTaps) / (correctTaps + wrongTaps) * 3
  );
  if (score == 3) return require("../assets/all_stars.png");
  else if (score == 2) return require("../assets/two_star.png");
  return require("../assets/one_star.png");
};
export default calculate;
