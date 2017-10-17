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
  ContentStyle: {
    flex: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "40%",
    paddingBottom: "40%"
  },
  MainSpace: { flex: 5, alignContent: "center", justifyContent: "center" },
  ContainerStyle: {
    flex: 1,
    backgroundColor: "#eee"
  },
  SubmitButtonStyle: {
    backgroundColor: "#eeae30"
  },
  SubmitButton2Style: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc"
  },
  SubmitButton2TextStyle: { color: "#000" },
  InputViewStyle: {
    flex: 1
  }
});
export default styles;
