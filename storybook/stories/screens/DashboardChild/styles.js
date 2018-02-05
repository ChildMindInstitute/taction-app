import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#0067a0"
  },
  headerLeftStyle: { color: "white" },
  headerRightStyle: { flex: 1, flexDirection: "row", alignItems: "center" },
  headerRightImageSpace: { flex: 1, alignItems: "center" },
  headerRightTextSpace: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  headerRightTextAlign: { flex: 1 },
  headerRightTotalPointsStyle: { color: "white", flex: 2 },
  headerRightTotalPointsTextStyle: { fontSize: 6, color: "white", flex: 1 },
  contentStyle: { flex: 1, marginLeft: "-4%" },
  greetingsSpace: { flex: 2, alignItems: "center", justifyContent: "center" },
  listSpace: { flex: 13 },
  containerStyle: {
    flex: 1,
    backgroundColor: "#eee"
  },
  containerOuterView: { flex: 1, backgroundColor: "#0067a0" }
});
export default styles;
