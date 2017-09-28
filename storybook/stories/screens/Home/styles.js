import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: "#0067a0",
    height: "40%"
  },
  HeaderLeftStyle: { color: "white" },
  HeaderRightStyle: { flex: 1, flexDirection: "row", alignItems: "center" },
  HeaderRightImageSpace: { flex: 1, alignItems: "center" },
  HeaderRightTextSpace: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  HeaderRightTextAlign: { flex: 2.5 },
  HeaderRightTotalPointsStyle: { color: "white", flex: 2 },
  HeaderRightTotalPointsTextStyle: { fontSize: 6, color: "white", flex: 1 },
  HomeTimerStyle: { position: "absolute", left: "40%", top: "10%" },
  ExcerciseSpace: { flex: 2, marginTop: "-25%" },
  ExcerciseText: {
    flex: 1,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold"
  },
  ExcerciseContentStyle: { flex: 10, backgroundColor: "white" },
  FooterStyle: { height: "17%" }
});
export default styles;
