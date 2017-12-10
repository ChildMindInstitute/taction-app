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
  contentStyle: { flex: 1, paddingTop: "10%" },
  greetingsSpace: {
    flex: 1.3,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  greetingsSpaceInnerView: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    marginLeft: "5%",
    marginRight: "5%"
  },
  listSpace: { flex: 13 },
  containerStyle: { flex: 1, backgroundColor: "#eee" },
  buttons: {
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    width: 50
  },
  buttonIcons: { color: "#eeae30" },
  greetingsSpaceInnerViewInnerView: {
    flex: 1,
    alignSelf: "center"
  }
});
export default styles;
