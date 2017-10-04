import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: "#0067a0"
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
  ContentStyle: { flex: 1, marginLeft: "-4%" },
  GreetingsSpace: { flex: 2, alignItems: "center", justifyContent: "center" },
  ListSpace: { flex: 13 },
  ContainerStyle: { flex: 1, backgroundColor: "#eee" },
  AddFolderButtonStyle: {
    marginLeft: "32%",
    marginRight: "32%",
    backgroundColor: "#eeae30",
    borderRadius: 50
  }
});
export default styles;
