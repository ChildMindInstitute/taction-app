import { StyleSheet, Dimensions } from "react-native";
let { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#0067a0"
  },
  mainInnerView: {
    width: width - 30,
    height: height - 30,
    margin: 15
  },
  topSpace: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  mainLogoStyles: { alignSelf: "center", height: 90, width: 90 },
  formSpace: { flex: 6 },
  errorSpace: {
    flex: 2,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  errorText: { color: "white" },
  formStyle: { flex: 1 },
  forgotPasswordSpace: { flex: 1, marginBottom: "5%", marginTop: "4%" },
  submitButtonSpace: { flex: 1 },
  registerNowSpace: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomLogoSpace: { flex: 3, justifyContent: "flex-end" },
  subLogoStyles: { alignSelf: "center", height: 40, width: 120 },
  submitButtonStyle: {
    backgroundColor: "#eeae30"
  },
  submitButtonTextStyle: { color: "white" }
});
export default styles;
