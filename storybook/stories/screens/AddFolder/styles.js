import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: "#0067a0",
    marginTop: Platform.OS !== "ios" ? Constants.statusBarHeight : 0
  },
  HeaderLeftStyle: { color: "white" },
  HeaderRightStyle: { flex: 1, flexDirection: "row", alignItems: "center" },
  HeaderRightImageSpace: { flex: 1, alignItems: "center" },
  HeaderRightTextSpace: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  HeaderRightTextAlign: { flex: 1 },
  HeaderRightTotalPointsStyle: { color: "white", flex: 2 },
  HeaderRightTotalPointsTextStyle: { fontSize: 6, color: "white", flex: 1 },
  ContentStyle: { flex: 1 },
  MainSpace: { flex: 5, alignContent: "center", justifyContent: "center" },
  ContainerStyle: { flex: 1, backgroundColor: "#eee" }
});
export default styles;
