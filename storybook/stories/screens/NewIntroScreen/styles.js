import { StyleSheet, Dimensions } from "react-native";
let { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingBottom: 10
  },
  mainOuterView: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mainView: {
    flex: 1,
    width: width,
    height: height - 72
  },
  topSpace: { flex: 1 },
  topViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomViewSpace: {
    flex: 5,
    alignItems: "center"
  },
  totalScoreTextStyle: {
    color: "#eeae30",
    fontSize: 26,
    fontWeight: "500",
    margin: "5%",
    marginTop: "8%"
  },
  totalScoreStyle: {
    fontSize: 60,
    fontWeight: "500"
  },
  starsStyle: {
    width: 160,
    height: 70,
    margin: "5%"
  },
  playButtonStyle: {
    margin: "5%",
    borderRadius: 50
  },
  logoStyle: { width: 100, height: 100 },
  playButtonTextStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  howToPlayButtonStyle: {
    marginLeft: "15%",
    marginRight: "15%",
    borderRadius: 50
  },
  howToPlayButtonTextStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default styles;
