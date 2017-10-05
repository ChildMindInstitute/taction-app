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
  ContentStyle: { flex: 1 },
  MainSpace: { flex: 5, alignContent: "center", justifyContent: "center" },
  ContainerStyle: { flex: 1, backgroundColor: "#eee" },
  SubmitButton2Style: {
    backgroundColor: "transparent",
    marginLeft: "10%",
    marginRight: "10%",
    borderWidth: 1,
    borderColor: "#ccc"
  },
  SubmitButton2TextStyle: { color: "#000" },
  InputViewStyle: {
    flex: 0.25,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
    marginBottom: "4%"
  },
  SubmitButton3Style: {
    marginBottom: "5%",
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: "#ffffff"
  },
  SubmitButton3TextStyle: { color: "#0067a0" }
});
export default styles;
