import { StyleSheet, Dimensions } from "react-native";
let { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  mainModal: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: height,
    width: width,
    alignItems: "center"
  },
  view1: {
    backgroundColor: "#0067a0",
    flex: 1
  },
  view2: {
    flexDirection: "row",
    flex: 1
  },
  mainContent: {
    flex: 20
  },
  close: {
    color: "#f2cd32"
  },
  contentMainViewStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: width - 30
  },
  contentMainViewTextStyle: {
    color: "#f2cd32",
    fontSize: 30,
    fontWeight: "500"
  },
  text1: { marginBottom: "7%" },
  text2: { marginBottom: "3%" },
  contentMainViewImageStyle: { width: 200, height: 75 },
  contentMainViewPointsTextStyle: {
    color: "white",
    fontSize: 38,
    fontStyle: "italic",
    fontWeight: "400"
  },
  contentMainViewLevelDescriptionStyle: {
    color: "white",
    fontSize: 20,
    alignSelf: "center"
  },
  contentMainViewNextPrizeDescriptionStyle: { color: "#f2cd32", fontSize: 26 },
  contentMainViewInnerView: { alignContent: "center", flex: 4 },
  contentMainViewInnerViewButton1Style: {
    backgroundColor: "#eeae30",
    width: "100%",
    marginLeft: "2%",
    marginRight: "2%",
    borderRadius: 50
  },
  contentMainViewInnerViewButton1TextStyle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  contentMainViewInnerViewButton2Style: {
    backgroundColor: "#ffffff",
    marginLeft: "4%",
    marginRight: "4%",
    borderRadius: 50
  },
  contentMainViewInnerViewButton2TextStyle: {
    color: "#eeae30",
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default styles;
