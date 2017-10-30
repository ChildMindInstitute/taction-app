import { StyleSheet, Dimensions } from "react-native";
let { height, width } = Dimensions.get("screen");
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
    flex: 1
  },
  mainSpace: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    margin: 16,
    height: 300
  },
  containerStyle: {
    flex: 1,
    backgroundColor: "#eee",
    height: height,
    width: width
  },
  submitButton2Style: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc"
  },
  submitButton2TextStyle: { color: "#000" },
  inputViewStyle: {
    flex: 1
  },
  submitButton3Style: {
    backgroundColor: "#ffffff"
  },
  submitButton3TextStyle: { color: "#0067a0" }
});
export default styles;
