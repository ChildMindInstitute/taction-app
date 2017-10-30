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
  contentStyle: {
    flex: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "40%",
    paddingBottom: "40%"
  },
  mainSpace: { flex: 5, alignContent: "center", justifyContent: "center" },
  ContainerStyle: {
    flex: 1,
    backgroundColor: "#eee"
  },
  submitButtonStyle: {
    backgroundColor: "#eeae30",
    marginTop: 10
  },
  submitButton2Style: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 15
  },
  submitButton2TextStyle: { color: "#000" },
  inputViewStyle: {
    flex: 1
  }
});
export default styles;
