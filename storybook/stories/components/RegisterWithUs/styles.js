import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  },
  mainViewText: {
    color: "rgba(255,255,255,0.8)",
    alignSelf: "baseline",
    height: 20
  },
  mainViewButton: {
    alignSelf: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    height: 20
  },
  mainViewButtonText: {
    color: "#ffffff",
    paddingLeft: 6,
    fontWeight: "bold",
    textAlign: "justify"
  }
});
export default styles;
