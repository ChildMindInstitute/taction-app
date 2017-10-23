import { StyleSheet, Platform } from "react-native";
// import { Constants } from "expo";
const styles = StyleSheet.create({
  mainOuterViewOuterView: { flex: 1, backgroundColor: "#0067a0" },
  mainOuterView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop:
      Platform.OS !== "ios"
        ? Platform.OS == "ios" ? 0 : 1 //Constants.statusBarHeight
        : 0
  },
  scrollViewSpaceSpace: { flex: 9 },
  mainView: { flex: 1, margin: "5%" },
  topSpace: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center",
    marginTop: "5%"
  },
  topTextSpace: { flex: 4 },
  topTextStyle: {
    color: "#ffffff",
    fontSize: 18
  },
  seperator: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    opacity: 0.8,
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%"
  },
  consentTextSpace: { flex: 0.5, marginBottom: "5%" },
  consentText: { color: "#fff", fontSize: 22, fontWeight: "500" },
  termsSpace: { flex: 5, flexDirection: "column" },
  termsItem: { flex: 1, flexDirection: "row", marginBottom: "5%" },
  itemTextSpace: { flex: 8 },
  itemCheckBoxSpace: { flex: 1, marginRight: "3%" },
  itemText: { color: "#fff", fontSize: 18 },
  itemCheckBox: {
    top: 10,
    left: 0
  },
  mainLogoStyles: { alignSelf: "center", height: 90, width: 90 },
  submitButtonSpace: { flex: 1 }
});
export default styles;
