import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  MainOuterViewOuterView: { flex: 1, backgroundColor: "#0067a0" },
  MainOuterView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop:
      Platform.OS !== "ios"
        ? Platform.OS == "ios" ? 0 : Constants.statusBarHeight
        : 0
  },
  ScrollViewSpaceSpace: { flex: 9 },
  MainView: { flex: 1, margin: "5%" },
  TopSpace: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center",
    margin: "5%"
  },
  TopTextSpace: { flex: 4 },
  TopTextStyle: {
    color: "#ffffff"
  },
  Seperator: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    opacity: 0.8,
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%"
  },
  ConsentTextSpace: { flex: 0.5 },
  ConsentText: { color: "#fff", fontSize: 20, fontWeight: "500" },
  TermsSpace: { flex: 5, flexDirection: "column" },
  TermsItem: { flex: 1, flexDirection: "row" },
  ItemTextSpace: { flex: 8 },
  ItemCheckBoxSpace: { flex: 1 },
  ItemText: { color: "#fff", fontSize: 20, fontWeight: "300" },
  ItemCheckBox: {
    top: 10,
    left: 0
  },
  MainLogoStyles: { alignSelf: "center" },
  SubmitButtonSpace: { flex: 1 }
});
export default styles;
