import { StyleSheet } from "react-native";
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
  GreetingsSpace: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: "5%"
  },
  GreetingsSpaceInnerView: {
    flex: 1,
    flexDirection: "row",
    height: 45
  },
  ListSpace: { flex: 13 },
  ContainerStyle: { flex: 1, backgroundColor: "#eee" },
  Buttons: {
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "#aaa",
    borderWidth: 1
  },
  ButtonIcons: { color: "#eeae30", fontWeight: "bold" },
  GreetingsSpaceInnerViewInnerView: {
    flex: 1,
    alignSelf: "center"
  }
});
export default styles;
