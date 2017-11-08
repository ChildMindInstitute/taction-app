import { StyleSheet, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#0067a0"
  },
  mainInnerView: {
    width: width - 30,
    height: height - 80,
    margin: 15
  },
  topSpace: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  formSpace: { flex: 3 },
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
  submitButtonSpace: { flex: 1 },
  registerNowSpace: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: "10%",
    flexDirection: "row"
  },
  mainLogoStyles: { alignSelf: "center", height: 90, width: 90 },
  bottomLogoSpace: { flex: 3, justifyContent: "center" },
  subLogoStyles: { alignSelf: "center", height: 40, width: 120 },

  submitButtonTextStyle: { color: "white" },
  loginRedirectButtonStyle: {
    paddingLeft: 0,
    padding: 0,
    alignSelf: "center",
    height: 16,
    width: 80
  },
  loginRedirectButtonTextStyle: {
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 6,
    marginBottom: -2
  }
});
export default styles;
