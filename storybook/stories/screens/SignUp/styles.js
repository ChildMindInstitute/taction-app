import { StyleSheet, Platform, Dimensions } from "react-native";
let { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  mainOuterView: {
    backgroundColor: "#0067a0",
    flex: 1
  },
  mainView: {
    backgroundColor: "#0067a0",
    width: width - 30,
    height: Platform.OS == "ios" ? height - 30 : height - 75,
    margin: 15
  },
  topSpace: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: "5%"
  },
  formSpace: { flex: 9 },
  formStyle: { flex: 1 },
  submitButtonSpace: { flex: 1, marginTop: "5%" },
  mainLogoStyles: { alignSelf: "center", height: 90, width: 90 },
  bottomLogoSpace: { flex: 3, justifyContent: "flex-end" },
  subLogoStyles: { alignSelf: "center", height: 40, width: 120 },
  submitButtonTextStyle: { color: "white" },
  alreadyHaveAnAccountSpace: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  alreadyHaveAnAccountTextColor: {
    color: "rgba(255,255,255,0.8)",
    height: 25,
    alignSelf: "flex-end",
    margin: 5
  },
  loginRedirectButtonStyle: {
    paddingTop: 0,
    paddingBottom: -1,
    alignSelf: "flex-end",
    height: 18
  },
  loginRedirectButtonTextStyle: {
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 6
  }
});
export default styles;
