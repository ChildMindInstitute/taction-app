import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  mainInnerView: {
    flex: 1,
    margin: "5%"
  },
  topSpace: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  formSpace: { flex: 5 },
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
  mainLogoStyles: { alignSelf: "center", height: 90, width: 90 },
  bottomLogoSpace: { flex: 3, justifyContent: "flex-end" },
  subLogoStyles: { alignSelf: "center", height: 40, width: 120 },
  submitButtonStyle: {
    backgroundColor: "#eeae30"
  },
  submitButtonTextStyle: { color: "white" }
});
export default styles;
