import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: "#0067a0",
    height: "40%"
  },
  HeaderLeftStyle: { color: "white" },
  HeaderRightStyle: { flex: 1, flexDirection: "row", alignItems: "center" },
  HeaderRightImageSpace: { flex: 1, alignItems: "center" },
  HeaderRightTextSpace: {
    flex: 1.2,
    flexDirection: "column",
    alignItems: "center"
  },
  HeaderRightTextAlign: { flex: 3 },
  HeaderRightTotalPointsStyle: { color: "white", flex: 2 },
  HeaderRightTotalPointsTextStyle: { fontSize: 10, color: "white", flex: 1 },
  HomeTimerStyle: {
    position: "absolute",
    left: "42%",
    top: "13%"
  },
  ExcerciseSpace: { flex: 2, marginTop: "-25%" },
  ExcerciseText: {
    flex: 1,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold"
  },
  ExcerciseContentStyle: { flex: 10, margin: "3%" },
  FooterStyle: { height: "17%" },
  ContainerOuterViewStyle: { flex: 1, backgroundColor: "#0067a0" },
  ContainerStyle: {
    backgroundColor: "#eee",
    marginTop: Constants.statusBarHeight
  }
});
export default styles;
