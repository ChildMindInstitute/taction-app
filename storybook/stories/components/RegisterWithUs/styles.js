import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  mainViewText: { color: "#fff", opacity: 0.8 },
  mainViewButton: {
    alignSelf: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    height: 20
  },
  mainViewButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    paddingLeft: 6,
    paddingRight: 0
  }
});
export default styles;
