import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  MainViewText: { color: "#fff", opacity: 0.8 },
  MainViewButton: {
    alignSelf: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    height: 20
  },
  MainViewButtonText: {
    color: "#ffffff",
    fontWeight: "bold"
  }
});
export default styles;
