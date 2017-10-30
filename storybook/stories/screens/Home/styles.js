import { StyleSheet, Platform } from "react-native";
// import { Constants } from "expo";
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#0067a0",
    height: "40%"
  },
  headerLeftStyle: { color: "white" },
  headerRightStyle: { flex: 1, flexDirection: "row", alignItems: "center" },
  headerRightImageSpace: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  headerRightTextSpace: {
    flex: 25,
    flexDirection: "column",
    alignItems: "center"
  },
  headerRightTotalPointsStyle: {
    color: "white"
  },
  headerRightTotalPointsTextStyle: {
    fontSize: 12,
    color: "white"
  },
  headerRightTotalPointsViewStyle: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    display: "flex"
  },
  headerRightTotalPointsTextViewStyle: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    display: "flex"
  },
  homeTimerStyle: {
    position: "absolute",
    left: "42%",
    top: "13%"
  },
  excerciseSpace: { flex: 2, marginTop: "-25%" },
  excerciseText: {
    flex: 1,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold"
  },
  excerciseContentStyle: { flex: 10, margin: "3%" },
  footerStyle: { height: "17%" },
  containerOuterViewStyle: { flex: 1, backgroundColor: "#0067a0" },
  containerStyle: {
    backgroundColor: "#eee"
  }
});
export default styles;
