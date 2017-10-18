import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  mainOuterView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  mainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop:
      Platform.OS !== "ios"
        ? Platform.OS == "ios" ? 0 : Constants.statusBarHeight
        : 0,
    margin: "5%"
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
  MainLogoStyles: { alignSelf: "center", height: 90, width: 90 },
  bottomLogoSpace: { flex: 3, justifyContent: "flex-end" },
  subLogoStyles: { alignSelf: "center", height: 40, width: 120 },
  submitButtonTextStyle: { color: "white" },
  alreadyHaveAnAccountSpace: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "center",
    marginTop: "5%"
  },
  alreadyHaveAnAccountTextColor: { color: "#fff", opacity: 0.8 },
  loginRedirectButtonStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: "flex-end",
    height: 20
  },
  aoginRedirectButtonTextStyle: { color: "#fff", fontWeight: "bold" }
});
export default styles;
