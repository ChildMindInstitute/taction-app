import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainModal: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    margin: 0,
    paddingTop: "25%",
    paddingBottom: "35%",
    paddingLeft: "2%",
    paddingRight: "2%"
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
  ContentMainViewStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 0,
    margin: 0
  },
  ContentMainViewTextStyle: {
    color: "#f2cd32",
    fontSize: 30,
    fontWeight: "500"
  },
  Text1: { marginBottom: "7%" },
  Text2: { marginBottom: "3%" },
  ContentMainViewImageStyle: { width: 200, height: 75 },
  ContentMainViewPointsTextStyle: {
    color: "white",
    fontSize: 38,
    fontStyle: "italic",
    fontWeight: "400"
  },
  ContentMainViewLevelDescriptionStyle: {
    color: "white",
    fontSize: 20,
    alignSelf: "center"
  },
  ContentMainViewNextPrizeDescriptionStyle: { color: "#f2cd32", fontSize: 26 },
  ContentMainViewInnerView: { alignContent: "center", flex: 4 },
  ContentMainViewInnerViewButton1Style: {
    backgroundColor: "#eeae30",
    width: "100%",
    marginLeft: "2%",
    marginRight: "2%",
    borderRadius: 50
  },
  ContentMainViewInnerViewButton1TextStyle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  ContentMainViewInnerViewButton2Style: {
    backgroundColor: "#ffffff",
    marginLeft: "4%",
    marginRight: "4%",
    borderRadius: 50
  },
  ContentMainViewInnerViewButton2TextStyle: {
    color: "#eeae30",
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default styles;
