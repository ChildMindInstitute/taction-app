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
  MainView: { flex: 1 },
  TopSpace: { flex: 2, alignContent: "center", justifyContent: "center" },
  TopTextSpace: { flex: 4 },
  TopTextStyle: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    color: "#ffffff"
  },
  Seperator: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    opacity: 0.8,
    margin: "5%",
    flex: 1
  },
  ConsentTextSpace: { flex: 0.5, marginLeft: "5%" },
  ConsentText: { color: "#fff", fontSize: 20, fontWeight: "500" },
  TermsSpace: { flex: 5, flexDirection: "column", marginBottom: "15%" },
  TermsItem: { flex: 1, flexDirection: "row", margin: "5%" },
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
