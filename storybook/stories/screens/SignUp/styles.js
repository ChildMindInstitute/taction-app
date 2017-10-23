import { StyleSheet, Platform, Dimensions } from "react-native";
import { Constants } from "expo";
let { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  mainOuterView: {
    backgroundColor: "#0067a0"
  },
  mainView: {
    backgroundColor: "#0067a0",
    width: width - 30,
    height:
      height - 30 - (Platform.OS == "ios" ? 0 : Constants.statusBarHeight),
    margin: 15,
    marginTop: 15 + (Platform.OS == "ios" ? 0 : Constants.statusBarHeight)
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
    alignItems: "flex-end",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  alreadyHaveAnAccountTextColor: { color: "#fff", opacity: 0.8 },
  loginRedirectButtonStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: "flex-end",
    height: 20
  },
  loginRedirectButtonTextStyle: { color: "#fff", fontWeight: "bold" }
});
export default styles;
