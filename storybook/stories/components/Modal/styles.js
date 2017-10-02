import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainModal: {
    marginTop: "35%",
    marginBottom: "35%"
  },
  view1: {
    backgroundColor: "#0067a0",
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
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
    color: "#eeae30"
  },
  ContentMainViewStyle: { alignItems: "center", justifyContent: "center" },
  ContentMainViewTextStyle: {
    color: "#eeae30",
    fontSize: 32
  },
  Text1: { marginBottom: "3%" },
  Text2: { marginBottom: "7%" },
  ContentMainViewImageStyle: { width: 200, height: 60 },
  ContentMainViewPointsTextStyle: {
    color: "white",
    fontSize: 26,
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop: "5%"
  },
  ContentMainViewLevelDescriptionStyle: { color: "white", fontSize: 14 },
  ContentMainViewInnerView: { alignContent: "center" },
  ContentMainViewInnerViewButton1Style: {
    backgroundColor: "#eeae30",
    margin: "5%",
    borderRadius: 50
  },
  ContentMainViewInnerViewButton1TextStyle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  ContentMainViewInnerViewButton2Style: {
    backgroundColor: "#ffffff",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 50
  },
  ContentMainViewInnerViewButton2TextStyle: {
    color: "#eeae30",
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default styles;
